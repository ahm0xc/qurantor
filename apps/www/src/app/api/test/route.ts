import { getInfo } from "~/helpers/quran";

export async function GET() {
  const info = getInfo();
  return new Response(JSON.stringify(info));
}
