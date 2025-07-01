import { Metadata } from "next";

import { allBlog } from "@/app/utils";
import { AllBlogs } from "@/types";

type tParams = Promise<{ blog_id: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { blog_id } = await params;

  const singleBlog =
    (await allBlog.find((item: AllBlogs) => item.blog_id === blog_id)) || null;

  return {
    title: singleBlog?.title || "Default Title",
    description: singleBlog?.description || "",
    openGraph: {
      title: singleBlog?.title || "Default Title",
      description: singleBlog?.description || "",
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog?title=${encodeURIComponent(singleBlog?.title || "")}&id=${singleBlog?.blog_id}`,
      images: [
        {
          url: singleBlog?.cover_image || "",
          width: 1200,
          height: 630,
          alt: `Cover image for ${singleBlog?.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: singleBlog?.title || "Default Title",
      description: singleBlog?.description || "",
      images: singleBlog?.cover_image || "",
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: singleBlog?.keywords || "backbone, blog, tags",
  };
}

export default function SingleBlgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
