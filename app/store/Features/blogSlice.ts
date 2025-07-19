"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BlogCategory } from "@/types";

interface BlogState {
  selectedCategory: BlogCategory;
}

const initialState: BlogState = {
  selectedCategory: { name: "All", _id: null, description: "" },
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
