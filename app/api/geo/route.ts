import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { country } = await req.json();

  const res = NextResponse.json({ success: true });

  res.cookies.set("user-country", country, {
    path: "/",
    sameSite: "lax",
  });

  return res;
}
