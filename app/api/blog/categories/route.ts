import { NextResponse } from "next/server";

import { getCollection } from "@/app/utils/db";

export const revalidate = 0;

export async function GET() {
  const collection = await getCollection("blog_categories");

  const categories = await collection
    .find({})
    .sort({ createdAt: -1 }) // descending order
    .toArray();

  return NextResponse.json(categories);
}
