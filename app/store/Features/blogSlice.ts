"use client";
import { BlogCategory } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  selectedCategory: BlogCategory;
}

const initialState: BlogState = {
  selectedCategory: { name: "All", id: "all" },
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<BlogCategory>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = blogSlice.actions;
export default blogSlice.reducer;
