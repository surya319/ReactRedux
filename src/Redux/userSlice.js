import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("gets/getUsers", async () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.data;
  });
});
export const userSlice = createSlice({
  name: "User Slice",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
