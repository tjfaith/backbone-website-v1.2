"use client";
import React from "react";
import { Spinner } from "@heroui/spinner";
import { Pagination } from "@heroui/pagination";

import useBlog from "./useBlog";

import {
  BlogCard,
  BlogCategory,
  BlogHero,
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
    <>
      <BlogHero />
      <div className=" min-h-screen pt-10">
        <div className="page-max-width mb-2">
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
                        cursor: "dark:text-background",
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
    </>
  );
};

export default BlogPage;
