"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

import { PaymentOptions } from "@/types";
import { PaymentLinkServices } from "@/app/utils/services";
import { useOtherHooks } from "@/app/customHooks";

function usePaymentLink() {
  const { errorResponse: formatError } = useOtherHooks();
  const router = useRouter();
  const params = useParams<{ payment_link: string }>();

  const {
    data: linkDetails,
    isLoading: linkDetailsLoading,
    error: linkError,
  } = PaymentLinkServices().useGetLinkDetails(params.payment_link);
  const { mutateAsync: makeFlwPayment, isPending: paymentLoading } =
    PaymentLinkServices().useMakeFLWPayment(params.payment_link);
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  useEffect(() => {
    if (linkError) {
      const err = linkError as any;
      const msg = formatError(err);

      setErrorResponse(msg);
    }
  }, [linkError]);

  const makePayment = async () => {
    try {
      setLoading(true);
      const response = await makeFlwPayment();

      router.push(response?.data);
      toast.success("Payment Initialize");
    } catch (err: any) {
      setLoading(false);
      toast.error(formatError(err));
    }
  };

  const payment_options: PaymentOptions[] = [
    {
      title: "Pay with Flutterwave",
      start_icon: "ri:bank-card-fill",
      link: "#",
      status: "flutterwave",
      currency_type: ["FIAT"],
    },
    {
      title: "Card",
      start_icon: "ri:bank-card-fill",
      link: "#",
      status: "Coming soon",
      currency_type: ["FIAT"],
    },
    {
      title: "Crypto",
      start_icon: "ri:coin-fill",
      link: "#",
      status: "Coming soon",
      currency_type: ["CRYPTO"],
    },
    {
      title: "Bank Transfer",
      start_icon: "ri:send-plane-fill",
      link: "#",
      status: "Coming soon",
      currency_type: ["FIAT"],
    },
    {
      title: "Bank account",
      start_icon: "ri:bank-fill",
      link: "#",
      status: "Coming soon",
      currency_type: ["FIAT"],
    },
  ];

  return {
    payment_options,
    linkDetails,
    errorResponse,
    linkDetailsLoading,
    paymentLoading,
    loading,
    makePayment,
  };
}

export default usePaymentLink;
