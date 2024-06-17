import { NextResponse } from "next/server";

import InfoData from "~/data/info.json";

export async function GET(req: Request) {
  return new Response(JSON.stringify(InfoData));
}
