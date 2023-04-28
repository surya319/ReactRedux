import { createSlice } from "@reduxjs/toolkit";

export const CodeSlice = createSlice({
  name: "codeSlice",
  initialState: {
    value: {
      name: "",
      age: 0,
      email: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = {
        name: "",
        age: 0,
        email: "",
      };
    },
  },
});

export default CodeSlice.reducer;
export const { login, logout } = CodeSlice.actions;
