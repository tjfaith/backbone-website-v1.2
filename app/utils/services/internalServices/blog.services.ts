"use client";
import { useMutation, useQuery } from "@tanstack/react-query";

import api from "./axios.instance";

import { SubscriberPayload } from "@/types";

function BlogServices() {
  type BlogRequestFace = {
    page?: number;
    limit?: number;
    search?: string | null;
    author?: string | null;
    category?: string | null;
    from?: string | null;
    to?: string | null;
    onlyLatest?: boolean;
    excludeLatest?: boolean;
  };

  const useGetAllBlog = ({
    page = 1,
    limit = 10,
    search = null,
    author = null,
    category = null,
    from = null,
    to = null,
    onlyLatest = false,
    excludeLatest = false,
  }: BlogRequestFace) => {
    const fetchData = async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
      });

      if (search) params.append("q", search); // Note: use "q" to match API
      if (author) params.append("author", author);
      if (category) params.append("category", category);
      if (from) params.append("from", from);
      if (to) params.append("to", to);
      if (onlyLatest) params.append("onlyLatest", "true");
      if (excludeLatest) params.append("excludeLatest", "true");

      const { data } = await api.get(`/blog?${params.toString()}`);

      return data || [];
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: [
        "all_articles",
        page,
        limit,
        search,
        author,
        category,
        from,
        to,
        onlyLatest,
        excludeLatest,
      ],
      enabled: true,
      placeholderData: (prevData) => prevData,
    });
  };

  const useGetSingleBlog = (id: string) => {
    const fetchData = async () => {
      const data = await api.get(`/blog/${id}`);

      return data.data;
    };

    return useQuery({
      queryFn: () => fetchData(),
      queryKey: ["single_article", id],
      enabled: !!id,
    });
  };

  const useGetAllBlogCategory = () => {
    const fetchData = async () => {
      const data = await api.get("/blog/categories");

      return data.data || [];
    };

    return useQuery({
      queryFn: () => fetchData(),
      queryKey: ["all_categories"],
      enabled: true,
    });
  };

  //  const useGetAllBlogCategory = () => {
  //   const fetchData = async () => {
  //     const data = await api.get("/blog/categories");

  //     return data.data || [];
  //   };

  //   return useQuery({
  //     queryFn: () => fetchData(),
  //     queryKey: ["all_categories"],
  //     enabled: true,
  //   });
  // };

  // const useGetSingleBlog = (blog_id: string) => {
  //   const fetchData = async () => {
  //     return allBlog.find((item) => item.blog_id === blog_id) || null;
  //   };

  //   return useQuery({
  //     queryFn: fetchData,
  //     queryKey: ["single_blog", blog_id],
  //     enabled: true,
  //   });
  // };

  // const useGetAllBlogCategory = () => {
  //   const fetchData = async () => {
  //     return blogCategory || [];
  //   };

  //   return useQuery({
  //     queryFn: fetchData,
  //     queryKey: ["blog_categories"],
  //     enabled: true,
  //   });
  // };

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
