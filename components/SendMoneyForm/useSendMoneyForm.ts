"use client";

import { FormEvent, useEffect, useState } from "react";

import { allCurrencies, currencyConverter } from "@/app/utils";

interface Props {
  action: () => void;
}
function useSendMoneyForm({ action }: Props) {
  const [currencyKey, setCurrencyKey] = useState<any>("1");

  const [selectedCurrency, setSelectedCurrency] = useState<
    Record<string, string>
  >({});

  const [currencyKey2, setCurrencyKey2] = useState<any>("2");

  const [selectedCurrency2, setSelectedCurrency2] = useState<
    Record<string, string>
  >({});

  const [amountToSend, setAmountToSend] = useState(1000);
  const [transferFee, setTransferFee] = useState(0);
  const [platformFee, setPlatformFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCurrencyChange = (key: any) => {
    setCurrencyKey(key);
    const currency = allCurrencies.find(
      (cur: { id: string }) => cur.id === key,
    );

    if (currency) {
      setSelectedCurrency(currency);
    }
  };

  const handleCurrencyChange2 = (key: any) => {
    setCurrencyKey2(key);
    const currency = allCurrencies.find(
      (cur: { id: string }) => cur.id === key,
    );

    if (currency) {
      setSelectedCurrency2(currency);
    }
  };

  const handleConvertCurrency = (amount: number) => {
    return currencyConverter(
      Number(amount),
      selectedCurrency2?.abbreviation,
      selectedCurrency?.abbreviation,
    );
  };
  const handleMoneyToSend = () => {
    setTransferFee(handleConvertCurrency(transferFee));
    setPlatformFee(handleConvertCurrency(platformFee));
    const convertSentAmount = handleConvertCurrency(amountToSend);

    setTotalFee(transferFee + platformFee);

    setTotalAmount(totalFee + convertSentAmount);
  };

  const formatFigure = (value: number) => {
    return Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action();
  };

  useEffect(() => {
    handleCurrencyChange(currencyKey);
  }, [currencyKey]);

  useEffect(() => {
    handleCurrencyChange2(currencyKey2);
  }, [currencyKey2]);

  useEffect(() => {
    handleMoneyToSend();
  }, [currencyKey, currencyKey2, amountToSend, selectedCurrency]);

  return {
    currencyKey,
    selectedCurrency,
    amountToSend,
    selectedCurrency2,
    currencyKey2,
    totalAmount,
    transferFee,
    platformFee,
    totalFee,
    handleSubmit,
    formatFigure,
    handleCurrencyChange2,
    setAmountToSend,
    handleCurrencyChange,
  };
}

export default useSendMoneyForm;
