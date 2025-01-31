"use client";
import React from "react";
import { Spinner } from "@heroui/spinner";
import { Pagination } from "@heroui/pagination";

import useBlog from "./useBlog";

import {
  BlogCard,
  BlogCategory,
  BlogSubscribe,
  LatestBlog,
} from "@/components";
import { AllBlogs } from "@/types";
const BlogPage = () => {
  const {
    allBlogs,
    blogLoading,
    currentPage,
    paginatedBlogs,
    pageSize,
    blogRef,
    handlePageChange,
  } = useBlog();

  return (
    <div className=" min-h-screen pt-28">
      <div className="max-w-screen-2xl mx-auto lg:px-28 px-6">
        <div className="italic text-2xl text-primary font-medium">Blog</div>
        <div className="">
          {blogLoading ? (
            <div className="flex items-center justify-center  h-screen-60 ">
              <Spinner />
            </div>
          ) : (
            <div>
              {allBlogs && allBlogs?.length > 0 ? (
                <>
                  <LatestBlog />
                  <div ref={blogRef}>
                    <BlogCategory />
                  </div>
                  <div className=" mt-5 flex flex-col gap-20">
                    {paginatedBlogs?.map((blog: AllBlogs) => (
                      <BlogCard key={blog.blog_id} data={blog} />
                    ))}
                  </div>
                  <Pagination
                    showControls
                    classNames={{
                      base: "flex items-center justify-center mt-10",
                    }}
                    page={currentPage}
                    total={Math.ceil(allBlogs.length / pageSize)}
                    onChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="flex items-center justify-center h-screen-60  text-sm text-foreground">
                  No Blog found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <BlogSubscribe />
    </div>
  );
};

export default BlogPage;
