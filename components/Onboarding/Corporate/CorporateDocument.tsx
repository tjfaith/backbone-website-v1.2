"use client";
import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { CorporateDocumentsProps } from "@/types";
import { RootState } from "@/app/store";
import {
  setAccountType,
  setCompletedStep,
  setCorporateDocuments,
  updateCurrentStep,
  setCompanyInformation,
  setStepTitle,
} from "@/app/store/Features/onboardingSlice";
import { CustomButton, CustomFileUploader } from "@/components";

const CorporateDocument = () => {
  const dispatch = useDispatch();
  const { corporateDocuments, completedSteps } = useSelector(
    (state: RootState) => state.onboarding,
  );

  const handleValueChange = (
    value: File | null,
    key: keyof CorporateDocumentsProps,
  ) => {
    dispatch(
      setCorporateDocuments({
        ...corporateDocuments!,
        [key]: value,
      }),
    );
  };

  const restAllForms = () => {
    dispatch(setAccountType(null));
    dispatch(setCompanyInformation(null));
    dispatch(setCorporateDocuments(null));
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
            Certificate of Incorporation
          </div>
          <CustomFileUploader
            setSelectedFile={(file) =>
              handleValueChange(file, "certificateOfIncorporation")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Memorandum and Article of Association
          </div>
          <CustomFileUploader
            setSelectedFile={(file) => handleValueChange(file, "memorandum")}
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Status Report from CAC detailing particulars of your Directors
          </div>
          <CustomFileUploader
            setSelectedFile={(file) => handleValueChange(file, "cac")}
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Company profile
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "companyProfile")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            <span>Valid means of Identification</span>
            <span className="text-primary-600 font-normal">
              (Government-Issued ID)
            </span>
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) => handleValueChange(file, "idCard")}
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Passport photograph of principal officers
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "passportPhotograph")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Evidence of Company address
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "companyAddress")
            }
          />
          <small className=" text-xs font-normal">
            Utility bill not exceeding three (3) months, Current Lease Agreement
            or Statement of Account.
          </small>
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Applicable Licence if any and SCRUML Certificate
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "scrumlCertificate")
            }
          />
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Board resolution
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "boarResolution")
            }
          />
          <small className="text-primary-600 text-xs">
            Board resolution of the company approving the onboarding of Backbone
            Technology Solutions Limited and stating a contact person designated
            to act on behalf of the company
          </small>
        </div>

        <div>
          <div className=" text-sm font-medium text-primary mb-2">
            Company Policies
          </div>
          <CustomFileUploader
            MAX_FILE_SIZE={2 * 1024 * 1024}
            setSelectedFile={(file) =>
              handleValueChange(file, "companyPolicies")
            }
          />
          <small className=" text-xs font-normal text-primary-600">
            AML policy, Risk & Compliance policy, Data Privacy etc
          </small>
        </div>
      </div>
      <CustomButton isDisabled={false} lightBtn={false} type="submit">
        <span>Continue</span>{" "}
        <Icon className="text-xl" icon="ri:arrow-right-s-line" />
      </CustomButton>
    </form>
  );
};

export default CorporateDocument;
