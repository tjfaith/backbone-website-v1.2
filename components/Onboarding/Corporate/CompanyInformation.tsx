"use client";
import { Input } from "@heroui/input";
import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spacer } from "@heroui/spacer";
import { Icon } from "@iconify/react";
import { Select, SelectItem } from "@heroui/select";

import { CompanyInformationProps, CompanyType } from "@/types";
import {
  setCompletedStep,
  setCurrentStep,
  setCompanyInformation,
  setStepTitle,
} from "@/app/store/Features/onboardingSlice";
import { RootState } from "@/app/store";
import { CustomButton } from "@/components";

const CompanyInformation = () => {
  const dispatch = useDispatch();
  const { companyInformation, completedSteps } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const companyType: CompanyType[] = [
    "Startup",
    "Enterprise",
    "Small Business",
    "Corporation",
    "Non-Profit",
    "Government",
    "Freelancer",
    "Partnership",
    "Limited Liability Company",
    "Others",
  ];

  const handleValueChange = (
    value: string,
    key: keyof CompanyInformationProps,
  ) => {
    dispatch(
      setCompanyInformation({
        ...companyInformation!,
        [key]: value,
      }),
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentStep("step3"));
    dispatch(
      setCompletedStep([
        ...completedSteps.filter((step) => step !== "step2"),
        "step2",
      ]),
    );
  };

  useEffect(() => {
    dispatch(setStepTitle("Company Information"));
    dispatch(setCurrentStep("step2"));
  }, []);

  return (
    <form
      className="bg-background p-6 rounded-xl  w-full animate__animated animate__fadeIn"
      onSubmit={handleSubmit}
    >
      <div className="text-primary md:text-2xl text-xl font-semibold">
        Let us know you
      </div>
      <Spacer y={8} />
      <div>
        <Input
          isRequired
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          label="Company name"
          labelPlacement="outside"
          placeholder="Enter your legal first name"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={companyInformation?.companyName}
          variant="bordered"
          onValueChange={(value: string) =>
            handleValueChange(value, "companyName")
          }
        />
        <Spacer y={4} />

        <Select
          aria-label="Company Type"
          className=" w-full bg-transparent"
          classNames={{
            base: " mb-6",
            label: "font-medium !text-primary text-sm",
            innerWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            // input: "text-base placeholder:text-primary-400",
          }}
          isRequired={true}
          label="Company type"
          labelPlacement="outside"
          placeholder="Select your company type"
          selectedKeys={[companyInformation?.companyType as any]}
          validationBehavior="native"
          variant="bordered"
          onChange={(e) => handleValueChange(e.target.value, "companyType")}
        >
          {companyType.map((company) => (
            <SelectItem key={company}>{company}</SelectItem>
          ))}
        </Select>
        <Spacer y={1} />
        <Input
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          isRequired={true}
          label="Tax Identification number"
          labelPlacement="outside"
          placeholder="Enter your company tax identification number"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={companyInformation?.tid}
          variant="bordered"
          onValueChange={(value: string) => handleValueChange(value, "tid")}
        />

        <Spacer y={4} />
      </div>
      <Spacer y={6} />
      <CustomButton isDisabled={false} lightBtn={false} type="submit">
        <span>Continue</span>{" "}
        <Icon className="text-xl" icon="ri:arrow-right-s-line" />
      </CustomButton>
    </form>
  );
};

export default CompanyInformation;
