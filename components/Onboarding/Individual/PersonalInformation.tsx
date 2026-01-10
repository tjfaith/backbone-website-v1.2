"use client";
import { Input, Textarea } from "@heroui/input";
import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spacer } from "@heroui/spacer";
import { Icon } from "@iconify/react";

import { E164Number, PersonalInfoProps } from "@/types";
import {
  setCompletedStep,
  updateCurrentStep,
  setPersonalInformation,
  setStepTitle,
} from "@/app/store/Features/onboardingSlice";
import { RootState } from "@/app/store";
import CustomPhoneInput from "@/components/UI/CustomPhoneInput";
import { CustomButton } from "@/components";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const { personalInformation, completedSteps } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const handleValueChange = (
    value: string | E164Number | undefined,
    key: keyof PersonalInfoProps,
  ) => {
    dispatch(
      setPersonalInformation({
        ...personalInformation!,
        [key]: value,
      }),
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateCurrentStep("step3"));
    dispatch(
      setCompletedStep([
        ...completedSteps.filter((step) => step !== "step2"),
        "step2",
      ]),
    );
  };

  useEffect(() => {
    dispatch(setStepTitle("Personal Information"));
    dispatch(updateCurrentStep("step2"));
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
          label="First Name"
          labelPlacement="outside"
          placeholder="Enter your legal first name"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={personalInformation?.firstName}
          variant="bordered"
          onValueChange={(value: string) =>
            handleValueChange(value, "firstName")
          }
        />
        <Spacer y={4} />

        <Input
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          label="Middle Name"
          labelPlacement="outside"
          placeholder="Enter your legal middle name"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={personalInformation?.middleName}
          variant="bordered"
          onValueChange={(value: string) =>
            handleValueChange(value, "middleName")
          }
        />
        <Spacer y={4} />

        <Input
          isRequired
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          label="Last Name"
          labelPlacement="outside"
          placeholder="Enter your legal last name"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={personalInformation?.lastName}
          variant="bordered"
          onValueChange={(value: string) =>
            handleValueChange(value, "lastName")
          }
        />
        <Spacer y={4} />

        <Input
          isRequired
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          label="Email Address"
          labelPlacement="outside"
          placeholder="Enter your email address"
          radius="sm"
          type="email"
          validationBehavior="native"
          value={personalInformation?.email}
          variant="bordered"
          onValueChange={(value: string) => handleValueChange(value, "email")}
        />
        <Spacer y={4} />

        <CustomPhoneInput
          isRequired
          containerClass="rounded-lg"
          setValue={(value: E164Number | undefined) =>
            handleValueChange(value, "phoneNumber")
          }
          value={personalInformation?.phoneNumber}
        />
        <Spacer y={4} />

        <Input
          isRequired
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          label="Occupation"
          labelPlacement="outside"
          placeholder="Enter your occupation"
          radius="sm"
          type="text"
          validationBehavior="native"
          value={personalInformation?.occupation}
          variant="bordered"
          onValueChange={(value: string) =>
            handleValueChange(value, "occupation")
          }
        />
        <Spacer y={4} />

        <Textarea
          classNames={{
            label: "font-medium !text-primary text-sm",
            inputWrapper:
              "focus-within:!border-primary-400 bg-transparent shadow-none focus:bg-transparent ",
            input: "text-base placeholder:text-primary-400",
          }}
          isRequired={true}
          label="Address"
          labelPlacement="outside"
          placeholder="Enter your residential address"
          radius="md"
          value={personalInformation?.address}
          variant="bordered"
          onValueChange={(value: string) => handleValueChange(value, "address")}
        />
      </div>
      <Spacer y={6} />
      <CustomButton isDisabled={false} lightBtn={false} type="submit">
        <span>Continue</span>{" "}
        <Icon className="text-xl" icon="ri:arrow-right-s-line" />
      </CustomButton>
    </form>
  );
};

export default PersonalInformation;
