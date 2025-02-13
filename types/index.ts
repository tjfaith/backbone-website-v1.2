import { ButtonProps } from "@heroui/button";
import { ReactNode } from "react";

export type E164Number = string;
export type OfferingsStatus = "Coming soon" | "live";
export type AccountTypeProps = "individual" | "corporate";
export type OnboardingStep = "step1" | "step2" | "step3" | "step4";
export type CompanyType =
  | "Startup"
  | "Enterprise"
  | "Small Business"
  | "Corporation"
  | "Non-Profit"
  | "Government"
  | "Freelancer"
  | "Partnership"
  | "Limited Liability Company"
  | "Others";

export interface CustomButtonProps extends ButtonProps {
  children: ButtonProps["children"];
  lightBtn?: boolean;
}

export interface ContactUsPayload {
  name: string;
  email: string;
  phoneNumber: E164Number | undefined;
  subject: string;
  message: string;
}

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export interface BlogCategory {
  name: string;
  id: string;
}

export interface AllBlogs {
  blog_id: string;
  title: string;
  description: string;
  category: BlogCategory;
  created_at: string;
  cover_image: string;
  blog_content: string;
  keywords: string;
}

export interface QueryGetAllBlogsProps {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: string;
}

export interface SubscriberPayload {
  email: string;
}

export interface ViewImageProps {
  img: string;
  className?: string;
}

export interface BlogCardProps {
  data: AllBlogs;
}

export interface SocialsLayoutProps {
  children: ReactNode;
  hoverText: string;
  linkTo: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;
  hoverIconColor?: string;
  hoverChildren?: ReactNode;
}

export interface Offerings {
  icon: string;
  title: string;
  description: string;
  status: OfferingsStatus;
}

// ONBOARDING FORMS
export interface PersonalInfoProps {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: E164Number | undefined;
  occupation: string;
  address: string;
}

export interface CompanyInformationProps {
  companyName: string;
  companyType: CompanyType;
  tid: string;
}

export interface IndividualDocumentsProps {
  passportPhotograph: File;
  idCard: File;
  addressEvidence: File;
  bankStatement: File;
}

export interface CorporateDocumentsProps {
  certificateOfIncorporation: File;
  memorandum: File;
  cac: File;
  companyProfile: File;
  idCard: File;
  passportPhotograph: File;
  companyAddress: File;
  scrumlCertificate: File;
  boarResolution: File;
  companyPolicies: File;
}
