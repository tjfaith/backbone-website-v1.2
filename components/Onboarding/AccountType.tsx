"use client";
import React, { FormEvent, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { CustomButton, CustomCheckbox } from "@/components";
import {
  setAccountType,
  setCompletedStep,
  setCurrentStep,
  setStepTitle,
} from "@/app/store/Features/onboardingSlice";
import { RootState } from "@/app/store";

const AccountType = () => {
  const dispatch = useDispatch();
  const { completedSteps, accountType } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentStep("step2"));
    dispatch(
      setCompletedStep([
        ...completedSteps.filter((step) => step !== "step1"),
        "step1",
      ]),
    );
  };

  useEffect(() => {
    dispatch(setStepTitle("Account type"));
    dispatch(setCurrentStep("step1"));
  }, []);

  return (
    <form
      className="bg-background p-6 rounded-xl  w-full"
      onSubmit={handleSubmit}
    >
      <div className="text-primary md:text-2xl text-xl font-semibold mb-6">
        What kind of account do you want?
      </div>
      <div className="space-y-4 mb-6 px-2">
        <CustomCheckbox
          isSelected={accountType === "individual"}
          onValueChange={(val) => {
            dispatch(setAccountType(val ? "individual" : null));
          }}
        >
          <div className="text-base font-medium -mt-1 mb-1">Individual</div>
          <div
            className={`${accountType !== "individual" && "text-primary-600"} text-sm font-normal `}
          >
            Manage your payments, exchange currencies, and stay in control of
            your finances
          </div>
        </CustomCheckbox>

        <CustomCheckbox
          isSelected={accountType === "corporate"}
          onValueChange={(val) => {
            dispatch(setAccountType(val ? "corporate" : null));
          }}
        >
          <div className="text-base font-medium -mt-1 mb-1">Corporate</div>
          <div
            className={`${accountType !== "corporate" && "text-primary-600"} text-sm font-normal `}
          >
            Streamline global transactions, optimize payments, and scale your
            business with ease.
          </div>
        </CustomCheckbox>
      </div>
      <CustomButton isDisabled={!accountType} lightBtn={false} type="submit">
        <span>Continue</span>{" "}
        <Icon className="text-xl" icon="ri:arrow-right-s-line" />
      </CustomButton>
    </form>
  );
};

export default AccountType;
