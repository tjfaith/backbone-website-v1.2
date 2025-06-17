"use client";
import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Select, SelectedItems, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";

import useSendMoneyForm from "./useSendMoneyForm";

import CustomButton from "@/components/UI/CustomButton";
import { Currency } from "@/types";

interface Props {
  title: ReactNode | string;
  action: () => void;
}
const SendMoneyForm = ({ title, action }: Props) => {
  const {
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
    handleCurrencyChange2,
    handleCurrencyChange,
  } = useSendMoneyForm({ action });

  return (
    <form
      className=" rounded-lg dark:border-primary-50/10 border p-3 bg-background md:w-auto w-full"
      data-aos="fade-up"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">{title}</div>

      <div className="flex flex-col items-center gap-1">
        {/* SENDER */}
        <div className=" rounded-lg dark:border-primary-50/10 border p-2 w-full">
          <small className="text-primary-400">Amount you are sending</small>

          <div className="flex md:flex-row flex-col-reverse items-center gap-3 md:mt-0 mt-2  ">
            <div className="flex items-center space-x-1 w-full">
              <div className="text-2xl font-medium clash-display-font text-primary ml-2 md:ml-0">
                {selectedCurrency?.symbol}
              </div>
              <Input
                classNames={{
                  inputWrapper:
                    "bg-transparent px-1 shadow-none text-xs text-red-500",
                  input: " clash-display-font font-medium text-2xl  ",
                }}
                isRequired={true}
                size="sm"
                type="number"
                validationBehavior="native"
                value={amount.toString()}
                variant="flat"
                onValueChange={(val) => setAmount(Number(val))}
              />
            </div>
            <Select
              aria-label="currency"
              className=" md:max-w-36 md:w-44 w-full bg-transparent"
              classNames={{}}
              isLoading={currenciesLoading}
              isRequired={true}
              renderValue={(items: SelectedItems<Currency>) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Image
                      alt="currency image"
                      radius="full"
                      src={selectedCurrency?.avatar}
                    />
                    <div>{selectedCurrency?.code}</div>
                  </div>
                ));
              }}
              selectedKeys={[selectedCurrency?.id as any]}
              size="sm"
              validationBehavior="native"
              variant="flat"
              onChange={(e) => handleCurrencyChange(e.target.value)}
            >
              {activeCurrency?.map((currency: Currency) => (
                <SelectItem
                  key={currency?.id}
                  startContent={
                    <Image
                      alt="currency image"
                      radius="full"
                      src={currency?.avatar}
                    />
                  }
                >
                  {currency.code}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <Button
          isIconOnly
          className="text-default-600"
          variant="light"
          onPress={handleSwap}
        >
          <Icon className="text-primary-400 text-xl" icon="ri:swap-fill" />
        </Button>

        {/* RECEIVER */}
        <div className=" rounded-lg dark:border-primary-50/10 border p-2 w-full">
          <small className="text-primary-400">Amount receiver gets</small>

          <div className="flex items-center md:flex-row flex-col-reverse md:mt-0 mt-2 gap-3 ">
            <div className="flex items-center space-x-2 w-full ml-5 md:ml-0">
              <div className="text-2xl font-medium clash-display-font text-primary">
                {selectedCurrency2?.symbol}
              </div>
              <div className="text-2xl clash-display-font  font-medium text-primary ">
                {Number(handleConvertCurrency()?.total || 0).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 5,
                  }
                )}
              </div>
            </div>
            <Select
              aria-label="currency"
              className=" md:max-w-36 md:w-44 w-full bg-transparent"
              classNames={{}}
              isRequired={true}
              renderValue={(items: SelectedItems<Currency>) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Image
                      alt="currency image"
                      radius="full"
                      src={selectedCurrency2?.avatar}
                    />
                    <div>{selectedCurrency2?.code}</div>
                  </div>
                ));
              }}
              selectedKeys={[selectedCurrency2?.id as any]}
              size="sm"
              validationBehavior="native"
              variant="flat"
              onChange={(e) => handleCurrencyChange2(e.target.value)}
            >
              {activeCurrency.map((currency: Currency) => (
                <SelectItem
                  key={currency.id}
                  startContent={
                    <Image
                      alt="currency image"
                      radius="full"
                      src={currency.avatar}
                    />
                  }
                >
                  {currency.code}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {/* RATE */}
      </div>
      <div className=" mt-1 text-xs">
        <div className="flex items-center space-x-2 mb-2">
          <Icon
            className="text-primary-400 text-base"
            icon="ri:information-fill"
          />
          <small>
            <span className="text-primary-600">Conversion rate:</span>{" "}
            <span className="text-primary">
              {selectedCurrency?.symbol}1 = {selectedCurrency2?.symbol}
              {Number(convertedAmount.sell_rate).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 5,
              })}
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
                {selectedCurrency2?.symbol} {formatFigure(fees.conversionFee)}
              </div>
            </div>
            <div>Transaction fee</div>
          </div>
          <div className=" flex justify-center items-center w-7 ">
            <div className="bg-primary-400/50 h-4 w-0.5" />
          </div>
          {/* <div className="w-full flex items-center justify-between h-3.5 text-primary-400 font-normal">
            <div className=" flex items-center gap-2">
              <div className=" flex justify-center items-center w-7 ">
                <div className=" h-3.5 w-3.5 bg-primary-400/50 rounded-full" />
              </div>
              <div>
                {selectedCurrency2?.symbol} {formatFigure(fees.platformFee)}
              </div>
            </div>
            <div>Platform fee</div>
          </div> */}
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
                {selectedCurrency2?.symbol}{" "}
                {formatFigure(Number(handleConvertCurrency()?.total_fee))}
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
                {selectedCurrency2?.symbol}{" "}
                {formatFigure(Number(handleConvertCurrency()?.total))}
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
