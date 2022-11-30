import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/theme-slice";
import alertReducer from "@/redux/alert-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
