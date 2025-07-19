"use server";
import clientPromise from "./mongodb";

export async function getCollection(collectionName: string) {
  const client = await clientPromise;
  const db = client.db("backbone");

  return db.collection(collectionName);
}
