import { Metadata } from "next";

import { getBlogById } from "@/app/utils/services/internalServices/blog.server.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog_id: string }>; // ✅ make this a Promise
}): Promise<Metadata> {
  const { blog_id } = await params; // ✅ await it

  const singleBlog = await getBlogById(blog_id);

  if (!singleBlog) {
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for does not exist.",
    };
  }

  return {
    title: singleBlog?.title || "Default Title",
    description: singleBlog?.description || "",
    openGraph: {
      title: singleBlog?.title || "Default Title",
      description: singleBlog?.description || "",
      type: "article",
      url: `/blog?title=${encodeURIComponent(singleBlog?.title || "")}&id=${singleBlog?._id}`,
      images: [
        {
          url: singleBlog?.featuredImage || "",
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
      images: singleBlog?.featuredImage || "",
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: singleBlog.tags?.join(", ") || "backbone, blog, tags",
  };
}

export default function SingleBlgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
