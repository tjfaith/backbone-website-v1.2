"use client";
import React from "react";

import {
  CHeader,
  LocalAndInternational,
  MultiCurrencySupport,
  TailoredSupport,
} from "@/components";

const ChangingPayment = () => {
  return (
    <div className="overflow-x-hidden overflow-hidden py-8 bg-gradient-to-b from-background to-background-200 via-background-200 via-95% dark:via-success-100/5">
      <div className="page-max-width">
        <CHeader />
        <div className="space-y-2">
          <LocalAndInternational />
          <div className="gap-2 grid lg:grid-cols-2 grid-cols-1">
            <MultiCurrencySupport />
            <TailoredSupport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangingPayment;
