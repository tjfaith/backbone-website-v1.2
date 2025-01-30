"use client";

import createDOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store";
import { BlogServices } from "@/app/api";

function useLatestBlog() {
  const { selectedCategory } = useSelector((state: RootState) => state.blog);

  const DOMPurify = createDOMPurify();
  const router = useRouter();
  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };
  const { data: allBlogs, isLoading: blogLoading } =
    BlogServices().useGetAllBlog({ category_id: selectedCategory.id });
  const latestBlog = allBlogs && allBlogs[allBlogs?.length - 1];

  return { latestBlog, blogLoading, DOMPurify, viewBlog };
}

export default useLatestBlog;
