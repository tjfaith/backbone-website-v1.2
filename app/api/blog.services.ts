"use client";
import { useMutation, useQuery } from "@tanstack/react-query";

import api from "./api.services";

import { QueryGetAllBlogsProps, SubscriberPayload } from "@/types";
import { allBlog, blogCategory } from "@/app/utils/dummy_data";

function BlogServices() {
  const useGetAllBlog = ({
    page = 1,
    limit = 10,
    search = "",
    category_id = "all",
  }: QueryGetAllBlogsProps) => {
    const fetchData = async () => {
      if (category_id === "all") {
        return allBlog;
      }

      return allBlog.filter((item) => item.category.id === category_id);
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["all_blog", page, limit, search, category_id],
      enabled: true,
    });
  };

  const useGetAllBlogCategory = () => {
    const fetchData = async () => {
      return blogCategory || [];
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["blog_categories"],
      enabled: true,
    });
  };

  const useGetSingleBlog = (blog_id: string) => {
    const fetchData = async () => {
      return allBlog.find((item) => item.blog_id === blog_id) || null;
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["single_blog", blog_id],
      enabled: true,
    });
  };

  const useBlogSubscriber = () => {
    return useMutation({
      mutationKey: ["blog-subscriber"],
      mutationFn: async (subscriberPayload: SubscriberPayload) => {
        return await api.post("/cotton-service/subscribers", subscriberPayload);
      },
      retry: false,
    });
  };

  return {
    useGetAllBlog,
    useGetAllBlogCategory,
    useGetSingleBlog,
    useBlogSubscriber,
  };
}
export default BlogServices;
