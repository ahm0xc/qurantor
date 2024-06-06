import Editions from "@qurantor/data/editions";

export async function GET() {
  return new Response(JSON.stringify(Editions));
}
