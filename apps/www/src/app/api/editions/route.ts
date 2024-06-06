import Editions from "~/data/editions/index.json";

export async function GET() {
  return new Response(JSON.stringify(Editions));
}
