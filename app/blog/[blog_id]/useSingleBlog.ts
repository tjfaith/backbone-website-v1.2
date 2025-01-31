"use client";
import createDOMPurify from "dompurify";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { BlogServices } from "@/app/api";
function useSingleBlog() {
  const DOMPurify = createDOMPurify();
  const params = useSearchParams();
  const router = useRouter();
  const blog_id = params.get("id");
  const currentPath = usePathname();

  const {
    data: singleBlog,
    isLoading: blogLoading,
    refetch: refetchBlog,
  } = BlogServices().useGetSingleBlog(blog_id as string);

  useEffect(() => {
    refetchBlog();
  }, [currentPath]);

  return { singleBlog, DOMPurify, router, blogLoading };
}

export default useSingleBlog;
