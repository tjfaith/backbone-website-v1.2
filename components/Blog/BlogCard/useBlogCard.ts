"use client";
import createDOMPurify from "dompurify";
import { useRouter } from "next/navigation";

function useBlogCard() {
  const DOMPurify = createDOMPurify();
  const router = useRouter();
  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };

  return { DOMPurify, viewBlog };
}
export default useBlogCard;
