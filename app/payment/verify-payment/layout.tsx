"use client";

import { PreLoader } from "@/components";
import { Suspense } from "react";

export default function VerifyPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PreLoader />}>{children}</Suspense>;
}
