"use client";
import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";

import useSendMoneyForm from "./useSendMoneyForm";

import { allCurrencies, currencyConverter } from "@/app/utils";
import CustomButton from "@/components/CustomButton";

interface Props {
  title: ReactNode | string;
  action: () => void;
}
const SendMoneyForm = ({ title, action }: Props) => {
  const {
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
  } = useSendMoneyForm({ action });

  return (
    <form
      className=" rounded-lg dark:border-primary-50/10 border p-3"
      data-aos="fade-up"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">{title}</div>

      <div className="flex flex-col items-center gap-1">
        {/* SENDER */}
        <div className=" rounded-lg dark:border-primary-50/10 border p-2">
          <small className="text-primary-400">Amount you are sending</small>

          <div className="flex items-center gap-3  ">
            <div className="flex items-center space-x-1">
              <div className="text-2xl font-medium clash-display-font text-primary">
                {selectedCurrency.symbol}
              </div>
              <Input
                classNames={{
                  inputWrapper: "bg-transparent px-0 shadow-none",
                  input: "text-2xl clash-display-font font-medium text-base",
                }}
                isRequired={true}
                type="number"
                validationBehavior="native"
                value={amountToSend.toString()}
                variant="flat"
                onValueChange={(val) => setAmountToSend(Number(val))}
              />
            </div>
            <Autocomplete
              aria-label="currency"
              className=" max-w-36 w-36 bg-transparent"
              classNames={{ base: "p-0" }}
              isRequired={true}
              selectedKey={currencyKey}
              startContent={
                <Image
                  alt="currency image"
                  className=" w-20"
                  radius="full"
                  sizes="xl"
                  src={selectedCurrency.icon}
                />
              }
              validationBehavior="native"
              variant="flat"
              onSelectionChange={handleCurrencyChange}
            >
              {allCurrencies.map((currency) => (
                <AutocompleteItem
                  key={currency.id}
                  className=" capitalize "
                  startContent={
                    <Image
                      alt="currency image"
                      radius="full"
                      src={currency.icon}
                    />
                  }
                >
                  {currency.abbreviation}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
        <Icon className="text-primary-400 text-xl" icon="ri:swap-fill" />

        {/* RECEIVER */}
        <div className=" rounded-lg dark:border-primary-50/10 border p-2 w-full">
          <small className="text-primary-400">Amount receiver gets</small>

          <div className="flex items-center gap-3 ">
            <div className="flex items-center space-x-1 w-full">
              <div className="text-2xl font-medium clash-display-font text-primary">
                {selectedCurrency2.symbol}
              </div>
              <div className="text-2xl clash-display-font font-medium  ">
                {Number(
                  currencyConverter(
                    Number(amountToSend),
                    selectedCurrency2?.abbreviation,
                    selectedCurrency?.abbreviation,
                  ),
                ).toLocaleString()}
              </div>
            </div>
            <Autocomplete
              aria-label="currency"
              className=" max-w-36  bg-transparent"
              classNames={{ base: "p-0" }}
              isRequired={true}
              selectedKey={currencyKey2}
              startContent={
                <Image
                  alt="currency image"
                  className=" w-20"
                  radius="full"
                  sizes="xl"
                  src={selectedCurrency2.icon}
                />
              }
              validationBehavior="native"
              variant="flat"
              onSelectionChange={handleCurrencyChange2}
            >
              {allCurrencies.map((currency) => (
                <AutocompleteItem
                  key={currency.id}
                  className=" capitalize "
                  startContent={
                    <Image
                      alt="currency image"
                      radius="full"
                      src={currency.icon}
                    />
                  }
                >
                  {currency.abbreviation}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>

        {/* RATE */}
      </div>
      <div className=" mt-1">
        <div className="flex items-center space-x-2 mb-2">
          <Icon
            className="text-primary-400 text-base"
            icon="ri:information-fill"
          />
          <small>
            <span className="text-primary-600">Conversion rate:</span>{" "}
            <span className="text-primary">
              1 {selectedCurrency2.abbreviation} ={" "}
              {Number(
                currencyConverter(
                  1,
                  selectedCurrency2?.abbreviation,
                  selectedCurrency?.abbreviation,
                ),
              ).toLocaleString()}{" "}
              {selectedCurrency.abbreviation}
            </span>
          </small>
        </div>

        {/* Amount breakdown */}
        <div className=" mb-4">
          <div className="w-full flex items-center justify-between h-3.5 text-primary-400 font-normal ">
            <div className=" flex items-center gap-2">
              <div className=" flex justify-center items-center w-7 ">
                <div className=" h-3.5 w-3.5 bg-primary-400/50 rounded-full" />
              </div>
              <div>
                {formatFigure(transferFee)} {selectedCurrency2.abbreviation}
              </div>
            </div>
            <div>Transfer fee</div>
          </div>
          <div className=" flex justify-center items-center w-7 ">
            <div className="bg-primary-400/50 h-4 w-0.5" />
          </div>
          <div className="w-full flex items-center justify-between h-3.5 text-primary-400 font-normal">
            <div className=" flex items-center gap-2">
              <div className=" flex justify-center items-center w-7 ">
                <div className=" h-3.5 w-3.5 bg-primary-400/50 rounded-full" />
              </div>
              <div>
                {formatFigure(platformFee)} {selectedCurrency2.abbreviation}
              </div>
            </div>
            <div>Platform fee</div>
          </div>
          <div className=" flex justify-center items-center w-7 ">
            <div className="bg-primary-400/50 h-4 w-0.5" />
          </div>
          <div className="w-full flex items-center justify-between text-primary h-5 font-normal">
            <div className=" flex items-center gap-2">
              <div className=" flex justify-center items-center w-7 ">
                <div className=" flex items-center justify-center bg-transparent border border-primary-400/50 rounded-lg w-5 h-5 p-1">
                  <Divider className="bg-primary" orientation="horizontal" />
                </div>
              </div>
              <div>
                {formatFigure(totalFee)} {selectedCurrency2.abbreviation}
              </div>
            </div>
            <div>Total fees</div>
          </div>
          <div className=" flex justify-center items-center w-7 ">
            <div className="bg-primary-400/50 h-8 w-0.5" />
          </div>
          <div className="w-full flex items-center justify-between text-primary font-normal h-5">
            <div className=" flex items-center gap-2">
              <div className=" flex justify-center items-center w-7 h-5">
                <div className=" flex flex-col gap-1 items-center justify-center bg-transparent border border-primary-400/50 rounded-lg w-5 h-5 p-1">
                  =
                </div>
              </div>
              <div>
                {formatFigure(totalAmount)} {selectedCurrency2.abbreviation}
              </div>
            </div>
            <div>Total amount</div>
          </div>
        </div>

        <CustomButton type="submit">Send now</CustomButton>
      </div>
    </form>
  );
};

export default SendMoneyForm;
