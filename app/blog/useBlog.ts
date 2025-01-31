"use client";
import { useSelector } from "react-redux";
import { useMemo, useRef, useState } from "react";

import { BlogServices } from "@/app/api";
import { RootState } from "@/app/store";

function useBlog() {
  const blogRef = useRef<HTMLDivElement | null>(null);
  const { selectedCategory } = useSelector((state: RootState) => state.blog);
  const { data: allBlogs, isLoading: blogLoading } =
    BlogServices().useGetAllBlog({ category_id: selectedCategory.id });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
      allBlogs &&
      allBlogs
        .slice(0, -1) // Exclude the last blog
        .sort((a, b) => Number(b.blog_id) - Number(a.blog_id)) // Sort by blog_id
        .slice(startIndex, endIndex)
    ); // Apply pagination
  }, [allBlogs, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(page);
  };

  return {
    allBlogs,
    blogLoading,
    currentPage,
    paginatedBlogs,
    pageSize,
    blogRef,
    handlePageChange,
  };
}
export default useBlog;
