import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import { getCollection } from "@/app/utils/db";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  let objectId: ObjectId;

  try {
    objectId = new ObjectId(id);
  } catch (err) {
    err;

    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const collection = await getCollection("blogs");

  const blog = await collection.findOne({ _id: objectId, status: "published" });

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
