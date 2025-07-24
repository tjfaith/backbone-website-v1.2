import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import { getCollection } from "@/app/utils/db";

export const revalidate = 0;

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  let objectId: ObjectId;

  try {
    objectId = ObjectId.createFromHexString(id);
  } catch {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const blogsCollection = await getCollection("blogs");

  const pipeline = [
    {
      $match: {
        _id: objectId,
        status: "published",
      },
    },
    {
      $lookup: {
        from: "omeri_products", // Join with products collection
        localField: "omeriProduct",
        foreignField: "_id",
        as: "product",
      },
    },
    { $unwind: "$product" },
    {
      $match: {
        "product.name": { $regex: /^backbone$/i },
      },
    },
    {
      $project: {
        product: 0,
      },
    },
  ];

  const result = await blogsCollection.aggregate(pipeline).toArray();

  if (result.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(result[0]);
}
