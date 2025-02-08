"use client";
import createDOMPurify from "dompurify";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { setShowLightNav } from "@/app/store/Features/settingsSlice";
import { BlogServices } from "@/app/api";
function useSingleBlog() {
  const dispatch = useDispatch();
  const DOMPurify = createDOMPurify();
  const params = useSearchParams();
  const router = useRouter();
  const blog_id = params.get("id");

  const { data: singleBlog, isLoading: blogLoading } =
    BlogServices().useGetSingleBlog(blog_id as string);

  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return { singleBlog, DOMPurify, router, blogLoading };
}

export default useSingleBlog;
