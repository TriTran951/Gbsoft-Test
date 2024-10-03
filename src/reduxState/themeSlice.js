import { createSlice } from "@reduxjs/toolkit";
import { constValue } from "GlobalConfig/constValue";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  currentTheme: constValue.lightTheme,
  currentTextColor: constValue.textLightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;

      state.currentTheme = state.darkMode
        ? constValue.darkTheme
        : constValue.lightTheme;
      state.currentTextColor = state.darkMode
        ? constValue.textDarktheme
        : constValue.textLightTheme;

      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
