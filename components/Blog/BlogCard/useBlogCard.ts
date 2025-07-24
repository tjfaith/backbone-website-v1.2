"use client";
import { useRouter } from "next/navigation";

import { BlogServices } from "@/app/utils/services";

function useBlogCard() {
  const router = useRouter();
  const { data: categories } = BlogServices().useGetAllBlogCategory();
  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };

  return { categories, viewBlog };
}
export default useBlogCard;
