"use client";
import { useDispatch, useSelector } from "react-redux";

import { BlogServices } from "@/app/utils/services";
import { RootState } from "@/app/store";
import { setSelectedCategory } from "@/app/store/Features/blogSlice";
import { BlogCategory } from "@/types";

function useBlogCategory() {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: RootState) => state.blog);
  const { data: blogCategories } = BlogServices().useGetAllBlogCategory();

  const handleSelectCategory = (category: BlogCategory) => {
    dispatch(setSelectedCategory(category));
  };

  return {
    blogCategories,
    selectedCategory,
    handleSelectCategory,
  };
}

export default useBlogCategory;
