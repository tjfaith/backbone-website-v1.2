"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import {
  setAccountType,
  setCompletedStep,
  updateCurrentStep,
  setIndividualDocuments,
  setPersonalInformation,
} from "@/app/store/Features/onboardingSlice";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";
import {
  AccountType,
  CompanyInformation,
  CorporateDocument,
  FormSubmitted,
  IndividualDocument,
  OnboardingTab,
  PersonalInformation,
} from "@/components";
import { RootState } from "@/app/store";

const Onboarding = () => {
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  const { accountType, currentStep } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const scrollFormTop = () => {
    if (stepsRef.current) {
      stepsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const restAllForms = () => {
    dispatch(setAccountType(null));
    dispatch(setPersonalInformation(null));
    dispatch(setIndividualDocuments(null));
  };

  const handleResetForm = () => {
    dispatch(updateCurrentStep("step1"));
    dispatch(setCompletedStep([]));
    restAllForms();
  };

  useEffect(() => {
    scrollFormTop();
  }, [currentStep]);

  useEffect(() => {
    handleResetForm();
  }, []);

  return (
    <div ref={stepsRef} className="min-h-screen flex  w-full py-48">
      <div className="mx-auto xl:w-screen-40 md:w-screen-60 w-full space-y-1">
        <OnboardingTab />
        <div>
          {currentStep === "step1" && <AccountType />}
          {accountType === "corporate" && (
            <>
              {currentStep === "step2" && <CompanyInformation />}
              {currentStep === "step3" && <CorporateDocument />}
            </>
          )}

          {accountType === "individual" && (
            <>
              {currentStep === "step2" && <PersonalInformation />}
              {currentStep === "step3" && <IndividualDocument />}
            </>
          )}
          {currentStep === "step4" && <FormSubmitted />}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
