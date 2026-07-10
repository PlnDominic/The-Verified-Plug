import { promises as fs } from "fs";
import path from "path";

// Deliberately outside `public/`: Next's production server snapshots the
// public folder's file list at boot, so files written there while the
// server is running 404 until a restart. Serving through the /api/uploads
// route handler below reads from disk on every request instead.
export const UPLOADS_DIR = path.join(process.cwd(), "uploads-data");
export const MANIFEST_PATH = path.join(UPLOADS_DIR, "manifest.json");

export const SLOT_ID_PATTERN = /^[a-z0-9-]+$/;
export const FILENAME_PATTERN = /^[a-z0-9-]+\.(jpg|png|webp|gif)$/;

type Manifest = Record<string, { file: string; updatedAt: number }>;

async function readManifestFile(): Promise<Manifest> {
  try {
    const raw = await fs.readFile(MANIFEST_PATH, "utf-8");
    return JSON.parse(raw) as Manifest;
  } catch {
    return {};
  }
}

/** Reads the current uploaded image URL for every slot, keyed by slot id. */
export async function readSlotImages(): Promise<Record<string, string>> {
  const manifest = await readManifestFile();
  const out: Record<string, string> = {};
  for (const [slotId, entry] of Object.entries(manifest)) {
    out[slotId] = `/api/uploads/${entry.file}`;
  }
  return out;
}

export async function saveSlotImage(
  slotId: string,
  file: File
): Promise<string> {
  if (!SLOT_ID_PATTERN.test(slotId)) {
    throw new Error("Invalid slot id");
  }

  const ext = extensionForType(file.type);
  if (!ext) {
    throw new Error("Unsupported image type");
  }

  await fs.mkdir(UPLOADS_DIR, { recursive: true });

  const manifest = await readManifestFile();
  const previous = manifest[slotId];

  const filename = `${slotId}-${Date.now()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);

  manifest[slotId] = { file: filename, updatedAt: Date.now() };
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  if (previous && previous.file !== filename) {
    await fs.rm(path.join(UPLOADS_DIR, previous.file), { force: true });
  }

  return `/api/uploads/${filename}`;
}

const CONTENT_TYPE_FOR_EXT: Record<string, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

export async function readUploadedFile(
  filename: string
): Promise<{ buffer: Buffer; contentType: string } | null> {
  if (!FILENAME_PATTERN.test(filename)) return null;
  const ext = filename.split(".").pop() as string;
  try {
    const buffer = await fs.readFile(path.join(UPLOADS_DIR, filename));
    return { buffer, contentType: CONTENT_TYPE_FOR_EXT[ext] };
  } catch {
    return null;
  }
}

function extensionForType(type: string): string | null {
  switch (type) {
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    default:
      return null;
  }
}
