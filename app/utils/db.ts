"use server";
import clientPromise from "./mongodb";

export async function getCollection(collectionName: string) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB_NAME!);

  return db.collection(collectionName);
}
