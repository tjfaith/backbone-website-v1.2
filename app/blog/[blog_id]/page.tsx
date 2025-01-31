"use client";
import React from "react";
import { Spinner } from "@heroui/spinner";
import { Icon } from "@iconify/react";

import useSingleBlog from "./useSingleBlog";

import { ViewImage } from "@/components";

const SingleBlog = () => {
  const { singleBlog, DOMPurify, router, blogLoading } = useSingleBlog();

  return (
    <div className=" min-h-screen py-28 max-w-screen-2xl mx-auto lg:px-28 px-6">
      <button
        className="flex items-center space-x-1 cursor-pointer hover:text-primary ease-in-out duration-300 transition-all"
        onClick={() => router.push("/blog")}
      >
        <Icon icon="ri:arrow-left-s-line" />
        <span>Backbone blog</span>
      </button>
      {blogLoading ? (
        <div className="flex items-center justify-center h-screen-60 ">
          <Spinner />
        </div>
      ) : (
        <>
          {singleBlog ? (
            <>
              <div className=" flex items-center space-x-6 mt-8">
                <div className=" text-sm text-foreground-600 whitespace-nowrap space-x-4">
                  {new Date(singleBlog?.created_at as string).toDateString()}{" "}
                  {new Date(
                    singleBlog?.created_at as string,
                  ).toLocaleTimeString()}
                </div>
                <div className="text-sm text-primary capitalize">
                  {singleBlog?.category?.name}
                </div>
              </div>
              <div className=" mt-6 md:text-4xl  text-2xl font-bold text-primary">
                {" "}
                {singleBlog?.title}
              </div>
              <ViewImage
                className="md:object-contain object-cover  h-screen-40 object-center w-screen mt-5"
                img={singleBlog?.cover_image}
              />
              <div className="mt-6">
                {singleBlog && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(singleBlog?.blog_content),
                    }}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-screen-60  text-sm text-foreground">
              Data not found
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleBlog;
