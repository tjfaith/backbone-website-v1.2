import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import { getCollection } from "@/app/utils/db";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query: any = {};

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const filters = {
    author: searchParams.get("author"),
    category: searchParams.get("category"),
    status: searchParams.get("status"),
    omeriProductName: "backbone",
    q: searchParams.get("q"),
    from: searchParams.get("from"),
    to: searchParams.get("to"),
  };

  const onlyLatest = searchParams.get("onlyLatest") === "true";
  const excludeLatest = searchParams.get("excludeLatest") === "true";

  query.status = "published";

  if (filters.q) {
    query.$or = [
      { title: { $regex: filters.q, $options: "i" } },
      { content: { $regex: filters.q, $options: "i" } },
    ];
  }
  if (filters.author) query.author = filters.author;
  if (filters.category) query.category = filters.category;
  if (filters.status) query.status = filters.status;
  if (filters.from || filters.to) {
    query.createdAt = {};
    if (filters.from) {
      query.createdAt.$gte = new Date(`${filters.from}T00:00:00.000Z`);
    }
    if (filters.to) {
      query.createdAt.$lte = new Date(`${filters.to}T23:59:59.999Z`);
    }
  }

  const collection = await getCollection("blogs");

  // ✅ If filtering by product name, get its _id from omeri_products
  if (filters.omeriProductName) {
    const productsCollection = await getCollection("omeri_products");
    const product = await productsCollection.findOne({
      name: filters.omeriProductName,
    });

    if (product?._id) {
      query.omeriProduct = new ObjectId(product._id);
    } else {
      return NextResponse.json({
        data: [],
        total: 0,
        page,
        totalPages: 0,
      });
    }
  }

  if (onlyLatest) {
    const latestBlog = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    return NextResponse.json({
      data: latestBlog,
      total: 1,
      page: 1,
      totalPages: 1,
    });
  }

  // Exclude latest blog
  if (excludeLatest) {
    const [latest] = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    if (latest) {
      query._id = { $ne: latest._id };
    }
  }

  const blogs = await collection
    .find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  const total = await collection.countDocuments(query);

  return NextResponse.json({
    data: blogs,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}
