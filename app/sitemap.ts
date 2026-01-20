import { MetadataRoute } from "next";
import { getAllPublishedBlogs } from "@/app/utils/services/internalServices/blog.server.service";
import { staticPages } from "@/app/utils/seo/staticPages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    priority: path === "/" ? 1 : 0.8,
  }));

  const blogs = await getAllPublishedBlogs("Backbone");

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt
      ? new Date(blog.updatedAt)
      : new Date(blog.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
