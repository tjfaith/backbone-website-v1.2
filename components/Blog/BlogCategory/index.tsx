"use client";
import React from "react";

import useBlogCategory from "./useBlogCategory";

const BlogCategory = () => {
  const { blogCategories, selectedCategory, handleSelectCategory } =
    useBlogCategory();

  return (
    <div className="flex items-center space-x-5 mt-12 overflow-x-auto xscroll pb-2">
      {blogCategories &&
        [{ name: "All", id: "all" }, ...blogCategories]?.map((category) => (
          <button
            key={category?.id}
            className={`${selectedCategory.id === category.id ? "bg-primary text-white dark:text-foreground-900" : "bg-transparent text-foreground"} cursor-pointer px-3 py-2 text-sm rounded-full hover:bg-primary/50 dark:hover:bg-foreground-900 dark:hover:text-primary transition-all duration-300 ease-in-out capitalize`}
            onClick={() => handleSelectCategory(category)}
          >
            {category.name}
          </button>
        ))}
    </div>
  );
};

export default BlogCategory;
