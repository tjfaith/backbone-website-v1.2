"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import toast from "react-hot-toast";

import { PaymentLinkServices } from "@/app/utils/services";
import { useOtherHooks } from "@/app/customHooks";
function useVerifyPayment() {
  const { theme } = useTheme();
  const { errorResponse: formatError } = useOtherHooks();
  const isSSR = useIsSSR();
  const [queryParams, setQueryParams] = useState({ status: "", tx_ref: "" });
  const { mutateAsync: updatePaymentStatus, isPending: updateLoading } =
    PaymentLinkServices().useUpdatePayment();
  const searchParams = useSearchParams();

  const updatePayment = async (tx_ref: string) => {
    try {
      await updatePaymentStatus(tx_ref);
    } catch (error: any) {
      toast.error(formatError(error));
    }
    // await PaymentLinkServices().updatePayment(tx_ref).then(response=>{
    //   setLoading(false)
    // }, error=>{
    //   setLoading(false)
    // })
  };

  useEffect(() => {
    const status = searchParams.get("status") || "";
    const tx_ref = searchParams.get("tx_ref") || "";

    if (status !== "" && tx_ref !== "") {
      setQueryParams({ status, tx_ref });
      updatePayment(tx_ref);
    }
  }, [setQueryParams]);

  return { queryParams, updateLoading, theme, isSSR };
}

export default useVerifyPayment;
