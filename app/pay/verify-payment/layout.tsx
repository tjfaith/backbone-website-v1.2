"use client";

import { Suspense } from "react";

import { PreLoader } from "@/components";

export default function VerifyPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PreLoader />}>{children}</Suspense>;
}
