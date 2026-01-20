import { Metadata } from "next";

import { getBlogById } from "@/app/utils/services/internalServices/blog.server.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog_id: string }>;
}): Promise<Metadata> {
  const { blog_id } = await params;

  const mongoId = blog_id.split("-").pop();

  if (!mongoId) {
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for does not exist.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const singleBlog = await getBlogById(mongoId);

  if (!singleBlog) {
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for does not exist.",
    };
  }

  const canonicalUrl = `${baseUrl}/blog/${singleBlog.slug}`;


  return {
    title: singleBlog.title || "Default Title",
    description: singleBlog.description || "",
    alternates: {
      canonical: canonicalUrl, 
    },
    openGraph: {
      title: singleBlog.title || "Default Title",
      description: singleBlog.description || "",
      type: "article",
      url: canonicalUrl, // ✅ clean OG URL
      images: [
        {
          url: singleBlog.featuredImage || "",
          width: 1200,
          height: 630,
          alt: `Cover image for ${singleBlog.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: singleBlog.title || "Default Title",
      description: singleBlog.description || "",
      images: singleBlog.featuredImage || "",
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
