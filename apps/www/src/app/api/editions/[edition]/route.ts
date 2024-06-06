import { NextRequest, NextResponse } from "next/server";
import Editions from "@qurantor/data/editions";

import {Editions as EditionImports} from "~/data/editions"
import { STATUS_CODES } from "~/utils/status-code";

export async function GET(
  req: NextRequest,
  { params }: { params: { edition: string } }
) {
  const editionInfo = Object.values(Editions).find(
    (ed) => ed.name === params.edition.toLowerCase()
  );
  if (!editionInfo) {
    return NextResponse.json(
      { message: "Not found", code: STATUS_CODES.NOT_FOUND },
      { status: STATUS_CODES.NOT_FOUND }
    );
  }

  try {
    const fullEdition = await EditionImports[editionInfo.name]()

    return NextResponse.json(fullEdition);
  } catch (error) {
    console.log("🔴 Error on /api/edition/[edition]", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        code: STATUS_CODES.INTERNAL_SERVER_ERROR,
      },
      {
        status: STATUS_CODES.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
