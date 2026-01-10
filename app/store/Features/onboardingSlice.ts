"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  AccountTypeProps,
  CompanyInformationProps,
  CorporateDocumentsProps,
  IndividualDocumentsProps,
  OnboardingStep,
  PersonalInfoProps,
} from "@/types";

interface OnboardingState {
  completedSteps: OnboardingStep[];
  currentStep: OnboardingStep;
  stepTitle: string;
  accountType: AccountTypeProps | null;
  personalInformation: PersonalInfoProps | null;
  companyInformation: CompanyInformationProps | null;
  individualDocuments: IndividualDocumentsProps | null;
  corporateDocuments: CorporateDocumentsProps | null;
}

const initialState: OnboardingState = {
  completedSteps: [],
  currentStep: "step1",
  stepTitle: "",
  accountType: null,
  personalInformation: null,
  companyInformation: null,
  individualDocuments: null,
  corporateDocuments: null,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCompletedStep: (state, action: PayloadAction<OnboardingStep[]>) => {
      state.completedSteps = action.payload;
    },
    updateCurrentStep: (state, action: PayloadAction<OnboardingStep>) => {
      state.currentStep = action.payload;
    },
    setStepTitle: (state, action: PayloadAction<string>) => {
      state.stepTitle = action.payload;
    },
    setAccountType: (state, action: PayloadAction<AccountTypeProps | null>) => {
      state.accountType = action.payload;
    },
    setPersonalInformation: (
      state,
      action: PayloadAction<PersonalInfoProps | null>,
    ) => {
      state.personalInformation = action.payload;
    },
    setCompanyInformation: (
      state,
      action: PayloadAction<CompanyInformationProps | null>,
    ) => {
      state.companyInformation = action.payload;
    },
    setIndividualDocuments: (
      state,
      action: PayloadAction<IndividualDocumentsProps | null>,
    ) => {
      state.individualDocuments = action.payload;
    },
    setCorporateDocuments: (
      state,
      action: PayloadAction<CorporateDocumentsProps | null>,
    ) => {
      state.corporateDocuments = action.payload;
    },
  },
});

export const {
  setCompletedStep,
  updateCurrentStep,
  setStepTitle,
  setAccountType,
  setPersonalInformation,
  setCompanyInformation,
  setIndividualDocuments,
  setCorporateDocuments,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
