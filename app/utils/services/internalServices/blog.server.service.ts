// import { ObjectId } from "mongodb";

// import { getCollection } from "@/app/utils/db";

// export async function getBlogById(id: string) {
//   try {
//     const objectId = new ObjectId(id);
//     const collection = await getCollection("blogs");
//     const blog = await collection.findOne({
//       _id: objectId,
//       status: "published",
//     });

//     return blog;
//   } catch {
//     return null;
//   }
// }

import { ObjectId } from "mongodb";

import { getCollection } from "@/app/utils/db";

/**
 * Resolve product name → ObjectId
 */
async function getOmeriProductIdByName(productName: string) {
  const productsCollection = await getCollection("omeri_products");

  const product = await productsCollection.findOne(
    {
      name: { $regex: `^${productName}$`, $options: "i" },
    },
    { projection: { _id: 1 } },
  );

  return product?._id ?? null;
}

/**
 * Get single published blog by ID (filtered by product name)
 */
export async function getBlogById(id: string, omeriProductName = "backbone") {
  try {
    const blogId = new ObjectId(id);
    const collection = await getCollection("blogs");

    const productId = await getOmeriProductIdByName(omeriProductName);

    if (!productId) return null;

    const blog = await collection.findOne({
      _id: blogId,
      status: "published",
      omeriProduct: productId, // ✅ correct ObjectId match
    });

    return blog;
  } catch (error) {
    console.error("getBlogById error:", error);

    return null;
  }
}

/**
 * Get ALL published blogs for a product (Backbone)
 */
export async function getAllPublishedBlogs(omeriProductName = "Backbone") {
  try {
    const collection = await getCollection("blogs");

    const productId = await getOmeriProductIdByName(omeriProductName);

    if (!productId) return [];

    const blogs = await collection
      .find({
        status: "published",
        omeriProduct: productId,
      })
      .project({
        _id: 1,
        slug: 1,
        title: 1,
        excerpt: 1,
        updatedAt: 1,
        createdAt: 1,
      })
      .sort({ createdAt: -1 })
      .toArray();

    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);

    return [];
  }
}
