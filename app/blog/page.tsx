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
  const { allBlogs, blogLoading, blogRef, handlePageChange } = useBlog();

  return (
    <>
      <BlogHero />
      <div className=" min-h-screen pt-10">
        <div className="page-max-width">
          <div className="">
            {blogLoading ? (
              <div className="flex items-center justify-center  h-screen-60 ">
                <Spinner />
              </div>
            ) : (
              <div>
                {allBlogs?.data && allBlogs?.data?.length > 0 && <LatestBlog />}
                <div ref={blogRef}>
                  <BlogCategory />
                </div>
                {allBlogs?.data && allBlogs?.data?.length > 0 ? (
                  <>
                    <div className=" mt-5 flex flex-col gap-20">
                      {allBlogs?.data?.map((blog: AllBlogs) => (
                        <BlogCard key={blog._id} data={blog} />
                      ))}
                    </div>
                    <Pagination
                      showControls
                      classNames={{
                        base: "flex items-center justify-center mt-10",
                        cursor: "dark:text-background",
                      }}
                      page={allBlogs?.page}
                      total={allBlogs?.totalPages}
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
