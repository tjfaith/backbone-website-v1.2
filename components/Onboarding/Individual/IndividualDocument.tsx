"use client";
import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { RootState } from "@/app/store";
import {
  setAccountType,
  setCompletedStep,
  updateCurrentStep,
  setIndividualDocuments,
  setPersonalInformation,
  setStepTitle,
} from "@/app/store/Features/onboardingSlice";
import { CustomButton, CustomFileUploader } from "@/components";
import { IndividualDocumentsProps } from "@/types";

const IndividualDocument = () => {
  const dispatch = useDispatch();
  const { individualDocuments, completedSteps } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const handleValueChange = (
    value: File | null,
    key: keyof IndividualDocumentsProps,
  ) => {
    dispatch(
      setIndividualDocuments({
        ...individualDocuments!,
        [key]: value,
      }),
    );
  };

  const restAllForms = () => {
    dispatch(setAccountType(null));
    dispatch(setPersonalInformation(null));
    dispatch(setIndividualDocuments(null));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateCurrentStep("step4"));
    dispatch(
      setCompletedStep([
        ...completedSteps.filter((step) => step !== "step3"),
        "step3",
      ]),
    );
    restAllForms();
  };

  useEffect(() => {
    dispatch(setStepTitle("Document verification"));
    dispatch(updateCurrentStep("step3"));
  }, []);

  return (
    <form
      className="bg-background p-6 rounded-xl  w-full animate__animated animate__fadeIn"
      onSubmit={handleSubmit}
    >
      <div className="text-primary md:text-2xl text-xl font-semibold mb-6">
        Verify your Information
      </div>
      <div className=" space-y-6 mb-6">
        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Passport size photograph
          </div>
          <CustomFileUploader
            setSelectedFile={(file) =>
              handleValueChange(file, "passportPhotograph")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            <span>Valid means of identification </span>
            <span className="text-primary-600 font-normal">
              (Government issued ID)
            </span>
          </div>
          <CustomFileUploader
            setSelectedFile={(file) =>
              handleValueChange(file, "passportPhotograph")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            <span>Evidence of residential address </span>
            <span className="text-primary-600 font-normal">
              (Utility bill not exceeding three (3) months)
            </span>
          </div>
          <CustomFileUploader
            setSelectedFile={(file) =>
              handleValueChange(file, "addressEvidence")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            <span>Evidence of residential address </span>
            <span className="text-primary-600 font-normal">
              (Utility bill not exceeding three (3) months)
            </span>
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) => handleValueChange(file, "bankStatement")}
          />
        </div>
      </div>
      <CustomButton isDisabled={false} lightBtn={false} type="submit">
        <span>Continue</span>{" "}
        <Icon className="text-xl" icon="ri:arrow-right-s-line" />
      </CustomButton>
    </form>
  );
};

export default IndividualDocument;
