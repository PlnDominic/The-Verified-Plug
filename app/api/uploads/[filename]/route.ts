import { readUploadedFile } from "@/lib/uploads";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/uploads/[filename]">
) {
  const { filename } = await ctx.params;
  const file = await readUploadedFile(filename);
  if (!file) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(new Uint8Array(file.buffer), {
    headers: {
      "Content-Type": file.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
