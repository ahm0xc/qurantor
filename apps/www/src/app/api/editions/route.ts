import { getEditions } from "~/helpers/edition";

export const dynamic = "force-static";

export async function GET() {
  const editions = getEditions();
  return new Response(JSON.stringify(editions));
}
