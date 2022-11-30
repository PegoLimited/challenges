import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Theme options

interface ThemeState {
  value: "dark" | "light";
}

// Initial state of the reducer
const initialState: ThemeState = {
  value: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (_state, action: PayloadAction<ThemeState>) => {
      localStorage.setItem("theme", action.payload.value);
      return action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.value;
export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
