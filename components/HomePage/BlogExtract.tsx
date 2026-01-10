"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

import { BlogServices } from "@/app/utils/services";
import { Spinner } from "@/public/assets";
import { AllBlogs } from "@/types";

interface Props {
  title?: string | ReactNode;
  description?: string | ReactNode;
  btnText?: string;
}

const BlogExtract = ({
  title = "Take a walk with us!",
  description = "Read about how Backbone has helped individuals and businesses across a variety of sectors.",
  btnText = "Learn more about how we work",
}: Props) => {
  const {
    data: allBlogs,
    isLoading: blogLoading,
    refetch: refetchBlog,
  } = BlogServices().useGetAllBlog({});
  const { data: categories } = BlogServices().useGetAllBlogCategory();
  const router = useRouter();
  const currentPath = usePathname();

  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };

  useEffect(() => {
    refetchBlog();
  }, [currentPath]);

  return (
    <div>
      <div
        className="
          overflow-hidden
          page-max-width
          gap-8
          py-12
          sm:py-14
          grid
          grid-cols-1
          md:grid-cols-[1.2fr_2fr]
        "
      >
        {/* LEFT CONTENT */}
        <div className="md:max-w-md w-full mb-8 px-2 sm:px-0 md:pr-6">
          <div>
            <div className="clash-display-font text-3xl sm:text-4xl font-medium text-primary">
              {title}
            </div>
            <div className="text-primary-600 max-w-5xl mt-2">{description}</div>
          </div>

          <div className="mt-6">
            <Button
              as={Link}
              className="
                text-base
                bg-background-200
                py-3
                px-6
                rounded-[10px]
                text-primary-500
                w-full
                sm:w-auto
              "
              href="/blog"
              variant="light"
            >
              {btnText}
            </Button>
          </div>
        </div>

        {/* BLOG LIST */}
        <div>
          {!blogLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-5 col-span-1 md:col-span-2">
              {allBlogs?.data
                ?.slice(-4)
                .map((blog: AllBlogs, index: number) => (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                      hover:bg-white
                      rounded-3xl
                      p-2
                      transition-all
                      ease-in-out
                      duration-300
                    "
                  >
                    <Image
                      alt="blog image"
                      className="
                        object-cover
                        w-full
                        h-[200px]
                        sm:h-[220px]
                        md:h-screen-40
                        md:w-screen-30
                        mb-4
                        rounded-3xl
                      "
                      src={blog.featuredImage}
                    />

                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-5">
                        <div className="mb-2 uppercase text-primary-400 font-medium text-sm leading-5 tracking-[0.84px]">
                          {categories?.find(
                            (cat: { _id: string }) => cat._id === blog.category,
                          )?.name ?? "—"}
                        </div>

                        <div className="clash-display-font text-lg sm:text-xl font-medium text-primary mb-2 leading-6 sm:leading-7">
                          {blog?.title.length > 30
                            ? blog?.title.slice(0, 30) + "..."
                            : blog?.title}
                        </div>

                        <div className="text-primary-600 text-sm sm:text-base">
                          {typeof blog?.content === "string"
                            ? parse(
                                blog?.content.length > 100
                                  ? blog?.content.slice(0, 100) + "..."
                                  : blog?.content,
                              )
                            : null}
                        </div>
                      </div>

                      <button
                        className="flex items-center gap-1 text-primary font-medium text-sm leading-6 tracking-[-0.084px]"
                        onClick={() =>
                          viewBlog(
                            `/${blog._id}?title=${encodeURIComponent(
                              blog.title,
                            )}&id=${blog._id}`,
                          )
                        }
                      >
                        <span>Read article</span>
                        <Icon
                          className="text-lg font-bold"
                          icon="ri:arrow-right-s-line"
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="h-[200px] flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogExtract;
