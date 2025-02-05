"use cleint";
import React from "react";
import { Icon } from "@iconify/react";

import useBlogCard from "./useBlogCard";

import { ViewImage } from "@/components";
import { BlogCardProps } from "@/types";

const BlogCard = ({ data }: BlogCardProps) => {
  const { DOMPurify, viewBlog } = useBlogCard();

  return (
    <div>
      <div className=" grid md:grid-cols-2 mt-5 gap-10 items-center">
        <div>
          <div className="flex items-center space-x-6 whitespace-nowrap">
            <div className=" text-sm text-foreground-600 dark:text-foreground">
              {new Date(data?.created_at as string).toDateString()}
            </div>
            <div className="text-sm text-primary capitalize">
              {data?.category?.name}
            </div>
          </div>
          <div className=" text-4xl font-bold mt-4 text-primary">
            {data?.title}
          </div>
          <div className=" mt-4 ">
            {
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    data?.blog_content.length > 300
                      ? data?.blog_content.slice(0, 300) + "..."
                      : data?.blog_content,
                  ),
                }}
              />
            }
            <button
              className="flex mt-6 space-x-1 text-primary items-center font-sm cursor-pointer"
              onClick={() =>
                viewBlog(
                  `/${data.blog_id}?title=${encodeURIComponent(data.title)}&id=${data.blog_id}`,
                )
              }
            >
              <span>Read the story</span> <Icon icon="ri:arrow-right-s-line" />
            </button>
          </div>
        </div>
        <ViewImage
          className="w-full object-cover  h-screen-35"
          img={data?.cover_image}
        />
      </div>
    </div>
  );
};

export default BlogCard;
