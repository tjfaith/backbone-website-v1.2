"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  showLightNav: boolean;
  currentHero: number;
  showAnnouncement: boolean;
}

const initialState: SettingsState = {
  showLightNav: false,
  currentHero: 0,
  showAnnouncement: false,
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
    updateShowAnnouncement: (state, action: PayloadAction<boolean>) => {
      state.showAnnouncement = action.payload;
    },
  },
});

export const { setShowLightNav, setCurrentHero, updateShowAnnouncement } =
  settingsSlice.actions;
export default settingsSlice.reducer;
