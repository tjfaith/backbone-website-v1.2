"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { BlogServices } from "@/app/api";
import { RootState } from "@/app/store";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

function useBlog() {
  const dispatch = useDispatch();
  const blogRef = useRef<HTMLDivElement | null>(null);
  const { selectedCategory } = useSelector((state: RootState) => state.blog);
  const { data: allBlogs, isLoading: blogLoading } =
    BlogServices().useGetAllBlog({ category_id: selectedCategory.id });
  const currentPath = usePathname();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
      allBlogs &&
      allBlogs
        .slice(0, -1)
        .sort((a, b) => Number(b.blog_id) - Number(a.blog_id))
        .slice(startIndex, endIndex)
    );
  }, [allBlogs, currentPage, pageSize, currentPath]);

  const handlePageChange = (page: number) => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(page);
  };

  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

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
