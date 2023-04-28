import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import CodeSlice from "./CodeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    codeSlice: CodeSlice,
  },
});
