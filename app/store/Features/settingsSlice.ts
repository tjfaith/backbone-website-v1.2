"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  showLightNav: boolean;
  currentHero: number;
  showAnnouncement: boolean;
  selectedCountry: {
    name: string;
    flag: string;
    code: string;
  };
}

const initialState: SettingsState = {
  showLightNav: false,
  currentHero: 0,
  showAnnouncement: false,
  selectedCountry: {
    name: "Nigeria",
    code: "NG",
    flag: "emojione:flag-for-nigeria",
  },
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
    updateSelectedCountry: (
      state,
      action: PayloadAction<{
        name: string;
        flag: string;
        code: string;
      }>,
    ) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const {
  setShowLightNav,
  setCurrentHero,
  updateShowAnnouncement,
  updateSelectedCountry,
} = settingsSlice.actions;
export default settingsSlice.reducer;
