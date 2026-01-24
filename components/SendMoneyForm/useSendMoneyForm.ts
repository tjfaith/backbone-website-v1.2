"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { CurrencyServices } from "@/app/utils/services";
import { Currency } from "@/types";
import { RootState } from "@/app/store";

interface Props {
  action: () => void;
}

function useSendMoneyForm({ action }: Props) {
  const fees = { conversionFee: 0, platformFee: 0 };
  const { selectedCountry } = useSelector((state: RootState) => state.settings);
  const [amount, setAmount] = useState(1);
  const [activeCurrency, setActiveCurrency] = useState<Currency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null,
  );
  const [selectedCurrency2, setSelectedCurrency2] = useState<Currency | null>(
    null,
  );

  const { data: allCurrencies = [], isLoading: currenciesLoading } =
    CurrencyServices().useGetAllCurrency();
  const { data: rates, isLoading: rateLoading } =
    CurrencyServices().useGetExchangeRate(selectedCurrency?.id);


  const getCurrencyById = (id: string) =>
    activeCurrency.find((cur) => cur.id === id);
  const getCurrencyByCode = (code: string) =>
    activeCurrency.find((cur) => cur.code === code);

  const convertCurrency = () => {
    if (!selectedCurrency || !selectedCurrency2)
      return { sell_rate: 0, buy_rate: 0 };
    if (selectedCurrency.code === selectedCurrency2.code)
      return { sell_rate: 1, buy_rate: 0 };

    const rate = rates?.find(
      (rate: { base_currency_id: string; target_currency_id: string }) =>
        rate.base_currency_id === selectedCurrency.id &&
        rate.target_currency_id === selectedCurrency2.id,
    );

    return {
      sell_rate: rate?.sell_rate || 0,
      buy_rate: rate?.buy_rate || 0,
    };
  };

  const convertedAmount = useMemo(convertCurrency, [
    amount,
    selectedCurrency,
    selectedCurrency2,
    rateLoading,
  ]);

  const handleSwap = () => {
    setSelectedCurrency(selectedCurrency2);
    setSelectedCurrency2(selectedCurrency);
  };

  const handleCurrencyChange = (key: string) =>
    setSelectedCurrency(getCurrencyById(key) || null);
  const handleCurrencyChange2 = (key: string) =>
    setSelectedCurrency2(getCurrencyById(key) || null);

  const handleConvertCurrency = () => {
    if (!amount || !selectedCurrency || !selectedCurrency2) return;
    const rate = convertCurrency().sell_rate;
    const total = amount * rate;
    const total_fee = fees.conversionFee + fees.platformFee;

    return { rate, total_fee, total, amount };
  };
  const formatFigure = (value: number) =>
    Number.isFinite(value)
      ? value.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 5,
        })
      : "0.00";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action();
  };

  useEffect(() => {
    setActiveCurrency(allCurrencies);
  }, [currenciesLoading]);

  useEffect(() => {
    const base_currency = getCurrencyByCode("USD");
    const convert_currency = getCurrencyByCode(selectedCountry?.currency);

    console.log(selectedCountry?.currency, 'convert to...')
    console.log(activeCurrency, 'active currency...')
    console.log(convert_currency, 'convert currency...')

    if (base_currency) setSelectedCurrency2(base_currency);
    convert_currency ? setSelectedCurrency(convert_currency) : setSelectedCurrency(getCurrencyByCode("NGN"));
  }, [activeCurrency, selectedCountry]);

  return {
    selectedCurrency,
    selectedCurrency2,
    activeCurrency,
    convertedAmount,
    fees,
    amount,
    currenciesLoading,
    handleConvertCurrency,
    setAmount,
    handleSwap,
    handleSubmit,
    formatFigure,
    handleCurrencyChange,
    handleCurrencyChange2,
  };
}

export default useSendMoneyForm;
