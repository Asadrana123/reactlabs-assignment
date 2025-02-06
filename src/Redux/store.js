import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import authenticationReducer from "./authenticationSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    authentication:authenticationReducer
  },
});
