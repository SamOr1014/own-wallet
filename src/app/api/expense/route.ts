import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { spending } from "../../../../lib/schema";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    hi: "u on9",
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({});
}
