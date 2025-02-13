import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { RootState } from "@/app/store";
import { OnboardingStep } from "@/types";
interface Props {
  step: string;
  activeStep: OnboardingStep;
  showLine: boolean;
}

const ActiveTab = ({ step, activeStep, showLine }: Props) => {
  const { stepTitle, currentStep, completedSteps } = useSelector(
    (state: RootState) => state.onboarding,
  );

  return (
    <>
      {currentStep === activeStep ? (
        <div className="flex items-center gap-2">
          <div className="rounded-full min-h-5 h-4 w-5 border-4 border-primary" />

          <div>
            <div className="text-primary-400 text-xs font-medium whitespace-nowrap">
              {step}
            </div>
            <div className="text-primary md:text-base text-sm font-normal whitespace-nowrap">
              {stepTitle}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {completedSteps.includes(activeStep) ? (
            <Icon
              className="text-success text-2xl"
              icon="lets-icons:check-fill"
            />
          ) : (
            <div className="h-[16px] min-w-[16px] bg-primary-100 rounded-full" />
          )}
        </div>
      )}
      {showLine && (
        <hr
          className={`w-full border-t-2 ${completedSteps.includes(activeStep) ? "border-success" : 'border-primary-100"'} mx-4`}
        />
      )}
    </>
  );
};

export default ActiveTab;
