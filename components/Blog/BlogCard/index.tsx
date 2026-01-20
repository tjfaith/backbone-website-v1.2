"use cleint";
import React from "react";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

import useBlogCard from "./useBlogCard";

import { ViewImage } from "@/components";
import { BlogCardProps } from "@/types";

const BlogCard = ({ data }: BlogCardProps) => {
  const { categories, viewBlog } = useBlogCard();

  return (
    <div className=" grid md:grid-cols-2 mt-5 gap-10 items-center">
      <div>
        <div className="flex items-center space-x-6 whitespace-nowrap">
          <div className=" text-sm text-foreground-600 dark:text-foreground">
            {new Date(data?.createdAt as string).toDateString()}
          </div>
          <div className="text-sm text-primary capitalize">
            {categories?.find(
              (cat: { _id: string }) => cat._id === data?.category,
            )?.name ?? "—"}
          </div>
        </div>
        <div className=" text-4xl font-bold mt-4 text-primary">
          {data?.title}
        </div>
        <div className=" mt-4 space-y-5">
          {typeof data?.content === "string"
            ? parse(
                data?.content?.length > 600
                  ? data?.content?.slice(0, 600) + "..."
                  : data?.content,
              )
            : null}

          <button
            className="flex mt-6 space-x-1 text-primary items-center font-sm cursor-pointer"
            onClick={() =>
              // viewBlog(
              //   `/${data?._id}?title=${encodeURIComponent(data.title)}&id=${data?._id}`,
              // )
              viewBlog(`/${data?.slug}`)
            }
          >
            <span>Read the story</span> <Icon icon="ri:arrow-right-s-line" />
          </button>
        </div>
      </div>
      <ViewImage
        className="w-full object-cover  h-screen-35"
        img={data?.featuredImage}
      />
    </div>
  );
};

export default BlogCard;
