import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // Default: User is NOT authenticated
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true; // Set authentication to true
    },
    logout: (state) => {
      state.isAuthenticated = false; // Reset authentication
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
