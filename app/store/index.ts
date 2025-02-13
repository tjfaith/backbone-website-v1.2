"use client";
import { configureStore } from "@reduxjs/toolkit";

import blogSlice from "./Features/blogSlice";
import settingsSlice from "./Features/settingsSlice";
import onboardingSlice from "./Features/onboardingSlice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
    settings: settingsSlice,
    onboarding: onboardingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
