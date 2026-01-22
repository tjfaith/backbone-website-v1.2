import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") ?? "UNKNOWN";

  const res = NextResponse.next();

  res.cookies.set("user-country", country, {
    path: "/",
    sameSite: "lax",
  });

  return res;
}
