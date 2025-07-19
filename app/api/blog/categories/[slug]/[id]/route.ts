// app/api/blog/categories/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { getCollection } from "@/app/utils/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  let objectId: ObjectId;

  try {
    objectId = new ObjectId(id);
  } catch {
    return NextResponse.json({ error: "Invalid category ID" }, { status: 400 });
  }

  const collection = await getCollection("blog_categories");
  const category = await collection.findOne({ _id: objectId });

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(category);
}
