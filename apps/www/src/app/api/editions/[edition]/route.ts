import { type NextRequest, NextResponse } from "next/server";

import { getEdition, getEditionsInfo } from "~/helpers/quran";
import { STATUS_CODES } from "~/utils/status-code";

export async function GET(_req: NextRequest, { params }: { params: { edition: string } }) {
  const editionInfo = Object.values(getEditionsInfo()).find(
    (ed) => ed.name === params.edition.toLowerCase(),
  );

  if (!editionInfo) {
    return NextResponse.json(
      { message: "Not found", code: STATUS_CODES.NOT_FOUND },
      { status: STATUS_CODES.NOT_FOUND },
    );
  }

  try {
    const data = getEdition(editionInfo.name);

    return NextResponse.json(data);
  } catch (error) {
    console.error("🔴 Error on /api/edition/[edition]", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        code: STATUS_CODES.INTERNAL_SERVER_ERROR,
      },
      {
        status: STATUS_CODES.INTERNAL_SERVER_ERROR,
      },
    );
  }
}
