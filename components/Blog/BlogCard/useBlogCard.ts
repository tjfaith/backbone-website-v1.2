"use client";
import createDOMPurify from "dompurify";
import { useRouter } from "next/navigation";

import { BlogServices } from "@/app/utils/services";

function useBlogCard() {
  const DOMPurify = createDOMPurify();
  const router = useRouter();
  const { data: categories } = BlogServices().useGetAllBlogCategory();
  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };

  return { DOMPurify, categories, viewBlog };
}
export default useBlogCard;
