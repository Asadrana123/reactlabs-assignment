import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || null, // Load from localStorage if available
  richText: localStorage.getItem("richText") || "", // Load from localStorage
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
      console.log("updated")
      localStorage.setItem("userData", JSON.stringify(action.payload)); // Save to localStorage
    },
    saveRichText: (state, action) => {
        state.richText = action.payload;
        localStorage.setItem("richText", action.payload);
      },
  },
});

export const { saveUserData ,saveRichText} = userSlice.actions;
export default userSlice.reducer;
