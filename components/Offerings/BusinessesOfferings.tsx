import React from "react";

import { CHeader, OfferingsCard } from "@/components";
import { Offerings } from "@/types";

const BusinessesOfferings = () => {
  const individual_offerings: Offerings[] = [
    {
      icon: "ri:global-fill",
      title: "Multi-currency Account",
      description:
        "Manage and transact in multiple currencies seamlessly with one powerful account",
      status: "live",
    },
    {
      icon: "ri:refresh-fill",
      title: "Worldwide Transaction Support",
      description:
        "Enjoy Fast, secure transactions designed to keep you connected globally.",
      status: "live",
    },
    {
      icon: "ri:links-fill",
      title: "Payment Link",
      description:
        "Generate and share payment links effortlessly. Get paid anytime, anywhere.",
      status: "live",
    },
    {
      icon: "ri:receipt-fill",
      title: "Invoice Financing",
      description:
        "Unlock cash flow with invoice financing. Get support faster and keep your business moving forward.",
      status: "live",
    },
    {
      icon: "ri:lock-fill",
      title: "Locked Funds",
      description:
        "Secure a portion of your funds for a chosen period, ensuring disciplined saving and financial planning.",
      status: "Coming soon",
    },
    {
      icon: "ri:hand-coin-fill",
      title: "Loans",
      description:
        "Enjoy a unique way to borrow money using your BTC or other stable coin asset as collateral.",
      status: "Coming soon",
    },
    {
      icon: "ri:coins-fill",
      title: "Savings",
      description:
        "Set aside funds in a secure environment and watch your savings grow over time.",
      status: "Coming soon",
    },
    {
      icon: "ri:bank-card-fill",
      title: "Virtual Cards",
      description:
        "Make seamless online transactions with a secure and reliable virtual card.",
      status: "Coming soon",
    },
    {
      icon: "ri:hand-coin-fill",
      title: "Physical Cards",
      description:
        "Enjoy the convenience of a physical card linked to your Backbone wallet.",
      status: "Coming soon",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-background via-background-200 md:via-0% via-100% dark:via-success-100/5">
      <div className="page-max-width space-y-16 py-12 ">
        <CHeader />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-3  ">
          {individual_offerings.map((offering, index) => (
            <OfferingsCard
              key={index}
              data={offering}
              iconColor="text-warning"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessesOfferings;
