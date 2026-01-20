"use client";

import React from "react";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

import useLatestBlog from "./useLatestBlog";

import { ViewImage } from "@/components";

const LatestBlog = () => {
  const { allBlogs, categories, blogLoading, viewBlog } = useLatestBlog();

  return (
    <>
      {allBlogs?.data && allBlogs?.data?.length > 0 && (
        <div className="bg-foreground-50 dark:bg-background rounded-3xl p-8 mt-5">
          {!blogLoading ? (
            <>
              {allBlogs?.data && (
                <div>
                  <div className="flex items-center space-x-6">
                    <div className=" text-sm text-foreground-600 dark:text-foreground whitespace-nowrap">
                      {new Date(
                        allBlogs?.data[0]?.createdAt as string,
                      ).toDateString()}
                    </div>
                    <div className="text-sm text-primary capitalize">
                      {categories?.find(
                        (cat: { _id: string }) =>
                          cat._id === allBlogs?.data[0]?.category,
                      )?.name ?? "—"}
                    </div>
                  </div>
                  <div className=" grid md:grid-cols-2 mt-5 gap-10 items-center">
                    <div className="">
                      <div className="md:text-3xl text-2xl font-bold text-primary">
                        {allBlogs?.data[0]?.title}
                      </div>
                      <div className=" mt-6 ">
                        <div className="space-y-5 hidden lg:block">
                          {typeof allBlogs?.data[0]?.content === "string"
                            ? parse(
                                allBlogs?.data[0]?.content?.length > 700
                                  ? allBlogs?.data[0]?.content.slice(0, 700) +
                                      "..."
                                  : allBlogs?.data[0]?.content,
                              )
                            : null}
                        </div>

                        <div className="mt-6 space-y-5 lg:hidden block">
                          {typeof allBlogs?.data[0]?.content === "string"
                            ? parse(
                                allBlogs?.data[0]?.content?.length > 100
                                  ? allBlogs?.data[0]?.content.slice(0, 100) +
                                      "..."
                                  : allBlogs?.data[0]?.content,
                              )
                            : null}
                        </div>

                        <button
                          className="flex mt-6 space-x-1 text-primary items-center font-medium cursor-pointer"
                          onClick={() =>
                            viewBlog(`/${allBlogs?.data[0]?.slug}`)
                          }
                        >
                          <span>Read the story</span>{" "}
                          <Icon icon="ri:arrow-right-s-line" />
                        </button>
                      </div>
                    </div>
                    <ViewImage
                      className="w-full object-cover  h-screen-35"
                      img={allBlogs?.data[0]?.featuredImage}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex items-center justify-center">
              Loading....
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LatestBlog;
