import fs from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";
import type { Edition } from "~/types/edition";

export function GET(
  _req: NextRequest,
  { params }: { params: { edition: string; chapter: string } },
) {
  const content = fs.readFileSync(
    path.join(process.cwd(), `./src/data/editions/${params.edition}.json`),
    "utf-8",
  );
  const data = JSON.parse(content) as Edition;
  const chapter = {
    chapter: Number.parseInt(params.chapter),
    verses: data.quran.filter((c) => c.chapter === Number.parseInt(params.chapter)),
  };

  return new Response(JSON.stringify(chapter));
}

// import { type NextRequest, NextResponse } from "next/server";

// import { getEdition, getEditionsInfo } from "~/helpers/quran";
// import { STATUS_CODES } from "~/utils/status-code";

// export async function GET(_req: NextRequest, { params }: { params: { edition: string; chapter: string } }) {
//   const editionInfo = Object.values(getEditionsInfo()).find(
//     (ed) => ed.name === params.edition.toLowerCase(),
//   );

//   if (!editionInfo) {
//     return NextResponse.json(
//       { message: "Not found", code: STATUS_CODES.NOT_FOUND },
//       { status: STATUS_CODES.NOT_FOUND },
//     );
//   }

//   try {
//     const data = getEdition(editionInfo.name);

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("🔴 Error on /api/edition/[edition]", error);
//     return NextResponse.json(
//       {
//         message: "Internal server error",
//         code: STATUS_CODES.INTERNAL_SERVER_ERROR,
//       },
//       {
//         status: STATUS_CODES.INTERNAL_SERVER_ERROR,
//       },
//     );
//   }
// }
