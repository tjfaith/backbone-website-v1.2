import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const h = await headers();
  const country = h.get("x-vercel-ip-country") ?? "UNKNOWN";
  const body = await req.json();

  // save or process
  // body + country

  return NextResponse.json({
    success: true,
    country,
  });
}
