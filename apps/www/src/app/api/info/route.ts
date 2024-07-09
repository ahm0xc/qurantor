import InfoData from "~/data/info.json";

export async function GET(_: Request) {
  return new Response(JSON.stringify(InfoData));
}
