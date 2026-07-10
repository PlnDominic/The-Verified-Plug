import { NextResponse } from "next/server";
import { saveSlotImage, SLOT_ID_PATTERN } from "@/lib/uploads";

export const dynamic = "force-dynamic";

const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const form = await request.formData();
  const slotId = form.get("slotId");
  const file = form.get("file");

  if (typeof slotId !== "string" || !SLOT_ID_PATTERN.test(slotId)) {
    return NextResponse.json({ error: "Invalid slot id" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "File must be an image" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image too large (max 10MB)" }, { status: 400 });
  }

  try {
    const url = await saveSlotImage(slotId, file);
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
