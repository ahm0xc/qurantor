import fs from "node:fs";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";

import Editions from "~/data/editions/index.json";
import { STATUS_CODES } from "~/utils/status-code";

export async function GET(_: NextRequest, { params }: { params: { edition: string } }) {
  const editionInfo = Object.values(Editions).find(
    (ed) => ed.name === params.edition.toLowerCase(),
  );
  if (!editionInfo) {
    return NextResponse.json(
      { message: "Not found", code: STATUS_CODES.NOT_FOUND },
      { status: STATUS_CODES.NOT_FOUND },
    );
  }

  try {
    // const file = await fs.readdirSync(path)
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), `./src/data/editions/${editionInfo.name}.json`),
      "utf-8",
    );

    return NextResponse.json(JSON.parse(fileContent));
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
