"use client";
import { configureStore } from "@reduxjs/toolkit";

import blogSlice from "./Features/blogSlice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
