import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { getCollection } from "@/app/utils/db";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
  }

  let objectId: ObjectId;

  try {
    objectId = new ObjectId(id);
  } catch {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  const collection = await getCollection("blogs");

  const result = await collection.updateOne(
    { _id: objectId },
    { $inc: { views: 1 }, $set: { updatedAt: new Date() } },
  );

  if (result.modifiedCount === 0) {
    return NextResponse.json(
      { error: "Blog not found or not updated" },
      { status: 404 },
    );
  }

  return NextResponse.json({ message: "View count incremented" });
}
