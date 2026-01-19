import { ButtonProps } from "@heroui/button";
import { ReactNode } from "react";

export type E164Number = string;
export type PaymentTypeStatus = "Coming soon" | "flutterwave" | "";
export type OfferingsStatus = "Coming soon" | "live";
export type AccountTypeProps = "individual" | "corporate";
export type CurrencyType = "CRYPTO" | "FIAT";
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

export interface BlogRequestFace {
  limit?: number;
  search?: string | null;
  author?: string | null;
  page?: number;
  from?: string | null;
  to?: string | null;
  category?: string | null;
}

export interface PaymentDetailsProps {
  amount: string;
  currency: string;
  tx_ref: string;
  date: string;
  status: string;
}

export interface Currency {
  id: string;
  name: string;
  code: string;
  rate: number;
  buy?: number | null;
  sell?: number | null;
  interest?: number | null;
  lock_interest_rate?: number | null;
  avatar: string;
  symbol: string;
  type: CurrencyType;
  is_deleted: boolean;
}

export interface PaymentOptions {
  title: string;
  start_icon: string;
  link: string;
  status: PaymentTypeStatus;
  currency_type: CurrencyType[];
}

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export interface BlogCategory {
  _id?: string | null;
  name: string;
  description: string;
  createdAt?: string;
}

export type ArticleStatus = "published" | "draft";

export interface AllBlogs {
  _id?: string;
  title: string; //
  content: string; //
  tags: string[]; //
  description: string; //
  status: ArticleStatus; //
  featuredImage?: any; //
  category: string; //
  createdAt?: string;
  updatedAt?: string;
  views?: null | number;
  comments?: null | CommentFace[];
  likes?: null | number;
  shares?: null | number;
  featured?: boolean;
  allowComments?: boolean;
  author: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}

export interface CommentFace {
  _id: string;
  postId: string;
  authorId: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  isApproved: boolean;
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
