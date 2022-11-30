import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  type: "info" | "error" | "success" | "warning";
  message?: string;
}

const initialState: AlertState = {
  type: "info",
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (_state, action) => {
      console.log(action);

      return action.payload;
    },
    removeAlert: () => {
      return initialState;
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
