"use client";
import React from "react";
import { Icon } from "@iconify/react";

import useLatestBlog from "./useLatestBlog";

import { ViewImage } from "@/components";

const LatestBlog = () => {
  const { latestBlog, DOMPurify, viewBlog } = useLatestBlog();

  return (
    <div className="bg-foreground-50 dark:bg-background rounded-3xl p-8 mt-5">
      {latestBlog && (
        <div>
          <div className="flex items-center space-x-6">
            <div className=" text-sm text-foreground-600 dark:text-foreground whitespace-nowrap">
              {new Date(latestBlog?.created_at as string).toDateString()}
            </div>
            <div className="text-sm text-primary capitalize">
              {latestBlog?.category?.name}
            </div>
          </div>
          <div className=" grid md:grid-cols-2 mt-5 gap-10 items-center">
            <div className="">
              <div className="md:text-3xl text-2xl font-bold text-primary">
                {latestBlog?.title}
              </div>
              <div className=" mt-6 ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      latestBlog?.blog_content.length > 700
                        ? latestBlog?.blog_content.slice(0, 700) + "..."
                        : latestBlog?.blog_content,
                    ),
                  }}
                  className="hidden lg:block"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      latestBlog?.blog_content.length > 100
                        ? latestBlog?.blog_content.slice(0, 100) + "..."
                        : latestBlog?.blog_content,
                    ),
                  }}
                  className="lg:hidden block"
                />
                <button
                  className="flex mt-6 space-x-1 text-primary items-center font-medium cursor-pointer"
                  onClick={() =>
                    viewBlog(
                      `/${latestBlog.blog_id}?title=${encodeURIComponent(latestBlog.title)}&id=${latestBlog.blog_id}`,
                    )
                  }
                >
                  <span>Read the story</span>{" "}
                  <Icon icon="ri:arrow-right-s-line" />
                </button>
              </div>
            </div>
            <ViewImage
              className="w-full object-cover  h-screen-35"
              img={latestBlog?.cover_image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestBlog;
