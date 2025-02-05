"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  showLightNav: boolean;
  currentHero: number;
}

const initialState: SettingsState = {
  showLightNav: false,
  currentHero: 0,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowLightNav: (state, action: PayloadAction<boolean>) => {
      state.showLightNav = action.payload;
    },
    setCurrentHero: (state, action: PayloadAction<number>) => {
      state.currentHero = action.payload;
    },
  },
});

export const { setShowLightNav, setCurrentHero } = settingsSlice.actions;
export default settingsSlice.reducer;
