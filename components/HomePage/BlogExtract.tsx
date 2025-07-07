"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import createDOMPurify from "dompurify";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link } from "@heroui/link";

import { BlogServices } from "@/app/utils/services";
import { Spinner } from "@/public/assets";
import { Icon } from "@iconify/react";

const BlogExtract = () => {
  const {
    data: allBlogs,
    isLoading: blogLoading,
    refetch: refetchBlog,
  } = BlogServices().useGetAllBlog({});
  const DOMPurify = createDOMPurify();
  const router = useRouter();
  const currentPath = usePathname();

  const viewBlog = (blog_id: string) => {
    router.push(`/blog/${blog_id}`);
  };

  useEffect(() => {
    refetchBlog();
  }, [currentPath]);

  return (
    <div className="page-max-width px-6 py-14 grid grid-cols-1 md:grid-cols-3">
      <div className=" max-w-md  mb-8">
        <div>
          <div className="clash-display-font text-4xl font-medium text-primary">
            Take a walk with us!
          </div>
          <div className="text-primary-600 max-w-5xl">
            Read about how Backbone has helped individuals and businesses across
            a variety of sectors.
          </div>
        </div>
        <div className="mt-6">
          <Button
            as={Link}
            className=" text-base text-primary-600"
            href="/blog"
            variant="bordered"
          >
            Learn more about how we work
          </Button>
        </div>
      </div>
      {!blogLoading ? (
        <div className="grid md:grid-cols-2 gap-5 col-span-2">
          {allBlogs?.slice(-4).map((blog, index) => (
            <div
              key={index}
              className="flex flex-col hover:bg-foreground-200/50 rounded-xl p-2 transition-all ease-in-out duration-300"
              data-aos="fade-up"
            >
              <Image
                alt="blog image"
                className="object-cover h-screen-40 md:w-screen-30 w-screen mb-4"
                src={blog.cover_image}
              />
              <div className="flex  flex-col justify-between flex-grow">
                <div>
                  <div className=" mb-2 uppercase text-primary-600 font-normal text-sm">
                    {blog.category.name}
                  </div>
                  <div className=" clash-display-font text-xl font-medium text-primary mb-2 leading-snug">
                    {blog.title}
                  </div>
                  <div className="text-primary-600">
                    {
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            blog?.blog_content.length > 500
                              ? blog?.blog_content.slice(0, 500) + "..."
                              : blog?.blog_content
                          ),
                        }}
                        className="text-base"
                      />
                    }
                  </div>
                  <Spacer y={5} />
                </div>
                <div>
                  <Button
                    className="text-primary-600 font-semibold px-0"
                    variant="light"
                    onPress={() =>
                      viewBlog(
                        `/${blog.blog_id}?title=${encodeURIComponent(blog.title)}&id=${blog.blog_id}`
                      )
                    }
                  >
                    Read article <Icon icon="ri:arrow-right-s-line" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" h-screen-30 flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BlogExtract;
