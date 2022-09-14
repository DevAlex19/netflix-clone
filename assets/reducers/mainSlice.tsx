import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "app",
  initialState: {
    value: "",
  },
  reducers: {},
  extraReducers: {},
});

export default mainSlice.reducer;
