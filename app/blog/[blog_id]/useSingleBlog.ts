"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { setShowLightNav } from "@/app/store/Features/settingsSlice";
import { BlogServices } from "@/app/utils/services";

function useSingleBlog() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();

  const slug = params.blog_id as string;

  // ✅ extract MongoDB id (after last "-")
  const blog_id = slug?.split("-").pop();

  const { data: singleBlog, isLoading: blogLoading } =
    BlogServices().useGetSingleBlog(blog_id as string);

  const { data: categories } = BlogServices().useGetAllBlogCategory();

  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme, isSSR, dispatch]);

  return { singleBlog, router, blogLoading, categories };
}

export default useSingleBlog;
