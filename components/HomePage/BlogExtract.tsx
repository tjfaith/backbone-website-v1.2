"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import createDOMPurify from "dompurify";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link } from "@heroui/link";

import { BlogServices } from "@/app/api";
import { Spinner } from "@/public/assets";

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
    <div className="max-w-screen-2xl mx-auto lg:px-28 px-6 py-14">
      <div className=" flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between lg:items-end mb-8">
        <div>
          <div className="clash-display-font text-4xl font-medium text-foreground-950">
            Take a walk with us!
          </div>
          <div className="text-foreground-950 max-w-xl">
            Read about how Backbone has helped individuals and businesses across
            a variety of sectors.
          </div>
        </div>
        <div>
          <Button
            as={Link}
            className=" text-base text-foreground-600"
            href="/blog"
            variant="bordered"
          >
            View all articles
          </Button>
        </div>
      </div>
      {!blogLoading ? (
        <div className="grid md:grid-cols-3 gap-5">
          {allBlogs?.slice(-3).map((blog, index) => (
            <div
              key={index}
              className="hover:bg-accent2-200/50 rounded-xl p-2 transition-all ease-in-out duration-300"
              data-aos="fade-up"
            >
              <Image
                alt="blog image"
                className="object-cover h-screen-40 md:w-screen-30 mb-4"
                src={blog.cover_image}
              />
              <div>
                <div className=" mb-2 uppercase text-foreground-400 font-normal text-sm">
                  {blog.category.name}
                </div>
                <div className=" clash-display-font text-xl font-medium text-foreground-950 mb-2 leading-snug">
                  {blog.title}
                </div>
                <div>
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          blog?.blog_content.length > 300
                            ? blog?.blog_content.slice(0, 300) + "..."
                            : blog?.blog_content,
                        ),
                      }}
                      className="text-base"
                    />
                  }
                </div>
                <Spacer y={20} />
                <Button
                  className="border"
                  variant="bordered"
                  onPress={() =>
                    viewBlog(
                      `/${blog.blog_id}?title=${encodeURIComponent(blog.title)}&id=${blog.blog_id}`,
                    )
                  }
                >
                  View article
                </Button>
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
