import { ButtonProps } from "@heroui/button";
import { ReactNode } from "react";
export type E164Number = string;

export interface CustomButtonProps extends ButtonProps {
  children: ButtonProps["children"];
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
