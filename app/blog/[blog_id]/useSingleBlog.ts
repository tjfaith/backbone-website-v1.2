"use client";
import createDOMPurify from "dompurify";
import { useRouter, useSearchParams } from "next/navigation";

import { BlogServices } from "@/app/api";
function useSingleBlog() {
  const DOMPurify = createDOMPurify();
  const params = useSearchParams();
  const router = useRouter();
  const blog_id = params.get("id");

  const { data: singleBlog, isLoading: blogLoading } =
    BlogServices().useGetSingleBlog(blog_id as string);

  return { singleBlog, DOMPurify, router, blogLoading };
}

export default useSingleBlog;
