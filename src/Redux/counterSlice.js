import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial value from localStorage or default to 0
const initialCounterValue = Number(localStorage.getItem("counterValue")) || 20;

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: initialCounterValue },
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counterValue", state.value); // Update localStorage
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counterValue", state.value);
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("counterValue", 0);
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
