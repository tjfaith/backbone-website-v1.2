"use client";

import createDOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store";
import { BlogServices } from "@/app/utils/services";

function useLatestBlog() {
  const { selectedCategory } = useSelector((state: RootState) => state.blog);
  const { data: categories } = BlogServices().useGetAllBlogCategory();

  const DOMPurify = createDOMPurify();
  const router = useRouter();
  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };
  const { data: allBlogs, isLoading: blogLoading } =
    BlogServices().useGetAllBlog({
      category: selectedCategory._id,
      onlyLatest: true,
    });

  return { blogLoading, DOMPurify, allBlogs, categories, viewBlog };
}

export default useLatestBlog;
