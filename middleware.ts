// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const country = req.headers.get("x-vercel-ip-country") ?? "UNKNOWN";

//   const res = NextResponse.next();

//   res.cookies.set("user-country", country, {
//     path: "/",
//     sameSite: "lax",
//   });

//   return res;
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // const country =
  //   req.headers.get("cf-ipcountry") || // Cloudflare
  //   req.headers.get("x-vercel-ip-country") || // Vercel
  //   "UNKNOWN";

  const rawCountry =
  req.headers.get("cf-ipcountry") ||
  req.headers.get("x-vercel-ip-country");

const country = rawCountry && rawCountry !== "XX"
  ? rawCountry
  : "UNKNOWN";

  const res = NextResponse.next();

  res.cookies.set("user-country", country, {
    path: "/",
    sameSite: "lax",
  });

  return res;
}