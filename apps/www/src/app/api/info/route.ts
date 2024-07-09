import { getInfo } from "~/helpers/quran";

export const dynamic = "force-static";

export async function GET(_req: Request) {
  const info = getInfo();
  return new Response(JSON.stringify(info));
}
