import { useQuery } from "@tanstack/react-query";

import api from "./api.services";

function CurrencyServices() {
  type CurrencyType = "FIAT" | "CRYPTO";

  const useGetAllCurrency = (currency_type?: CurrencyType) => {
    const fetchData = async () => {
      const data = await api.get(
        `/currency/get-all${currency_type ? `?currency_type=${currency_type}` : ""}`,
      );

      return data?.data?.data || [];
    };

    return useQuery({
      queryFn: () => fetchData(),
      queryKey: ["all_currency", currency_type],
      enabled: true,
    });
  };

  const useGetExchangeRate = (base_currency_id?: string) => {
    const fetchData = async () => {
      const data = await api.get(`/currency/get-rates/${base_currency_id}`);

      return data.data.data || [];
    };

    return useQuery({
      queryFn: () => fetchData(),
      queryKey: ["get_exchange_rate", base_currency_id],
      enabled: !!base_currency_id,
    });
  };

  return {
    useGetAllCurrency,
    useGetExchangeRate,
  };
}
export default CurrencyServices;
