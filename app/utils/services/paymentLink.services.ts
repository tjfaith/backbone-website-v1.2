import { useMutation, useQuery } from "@tanstack/react-query";

import api from "./api.services";

function UserServices() {
  const useGetLinkDetails = (link_id: string) => {
    const fetchData = async () => {
      const data = await api.get(`/payment/get-single-payment-link/${link_id}`);

      return data.data.data;
    };

    return useQuery({
      queryFn: () => fetchData(),
      queryKey: ["link_details", link_id],
      enabled: !!link_id,
    });
  };

  const useMakeFLWPayment = (link_id: string) => {
    const fetchData = async () => {
      const data = await api.get(`/payment/complete-payment-link/${link_id}`);

      return data.data;
    };

    return useMutation({
      mutationFn: fetchData,
    });
  };

  const useUpdatePayment = () => {
    return useMutation({
      mutationKey: ["update_payment"],
      mutationFn: (tx_ref: string) => {
        return api.post("/payment/status/payment-link", { tx_ref });
      },
      retry: false,
    });
  };

  const updatePayment = (tx_ref: string) => {
    return api.post("/payment/status/payment-link", { tx_ref });
  };

  return {
    useMakeFLWPayment,
    useGetLinkDetails,
    useUpdatePayment,
    updatePayment,
  };
}
export default UserServices;
