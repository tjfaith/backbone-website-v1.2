import { ObjectId } from "mongodb";

import { getCollection } from "@/app/utils/db";

export async function getBlogById(id: string) {
  try {
    const objectId = new ObjectId(id);
    const collection = await getCollection("blogs");
    const blog = await collection.findOne({
      _id: objectId,
      status: "published",
    });

    return blog;
  } catch {
    return null;
  }
}
