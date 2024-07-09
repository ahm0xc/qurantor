import { getEditionsInfo } from "~/helpers/quran";

export const dynamic = "force-static";

export async function GET() {
  const editions = getEditionsInfo();

  return new Response(JSON.stringify(editions));
}
