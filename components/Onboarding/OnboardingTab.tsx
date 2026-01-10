import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@heroui/button";

import { ActiveTab } from "@/components";
import { OnboardingStep } from "@/types";
import { RootState } from "@/app/store";
import { updateCurrentStep } from "@/app/store/Features/onboardingSlice";

const OnboardingTab = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: RootState) => state.onboarding);

  const tabList: { activeStep: OnboardingStep; stepLabel: string }[] = [
    { activeStep: "step1", stepLabel: "STEP 1" },
    { activeStep: "step2", stepLabel: "STEP 2" },
    { activeStep: "step3", stepLabel: "STEP 3" },
  ];

  const handlePrev = () => {
    const prevStep = ("step" +
      String(Number(currentStep.at(-1)) - 1)) as OnboardingStep;

    dispatch(updateCurrentStep(prevStep));
  };

  return (
    <div className="bg-background p-3 rounded-xl flex items-center justify-center w-full">
      {currentStep !== "step1" && currentStep !== "step4" && (
        <div className="pr-2 mr-4 border-r border-primary-100 ">
          <Button
            isIconOnly
            className=" bg-transparent p-0 "
            variant="flat"
            onPress={handlePrev}
          >
            <Icon
              className="text-xl text-primary-600"
              icon="ri:arrow-left-line"
            />
          </Button>
        </div>
      )}
      {tabList.map((tab, index) => (
        <Fragment key={index}>
          <ActiveTab
            activeStep={tab.activeStep}
            showLine={index < tabList.length - 1}
            step={tab.stepLabel}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default OnboardingTab;
