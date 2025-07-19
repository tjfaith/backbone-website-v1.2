"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { BlogServices } from "@/app/utils/services";
import { RootState } from "@/app/store";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

function useBlog() {
  const dispatch = useDispatch();
  const blogRef = useRef<HTMLDivElement | null>(null);
  const { selectedCategory } = useSelector((state: RootState) => state.blog);
  const { data: allBlogs, isLoading: blogLoading } =
    BlogServices().useGetAllBlog({
      category: selectedCategory._id,
      excludeLatest: true,
    });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page: number) => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(page);
  };

  const { theme } = useTheme();

  useEffect(() => {
    dispatch(setShowLightNav(true));
  }, [theme]);

  return {
    allBlogs,
    blogLoading,
    currentPage,
    // paginatedBlogs,
    pageSize,
    blogRef,
    handlePageChange,
  };
}
export default useBlog;
