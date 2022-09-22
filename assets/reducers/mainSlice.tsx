import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/actions";

type UserType = {
  name: string;
  profiles: string[];
};
export type initialStateType = {
  user: UserType;
};
const initialState: initialStateType = {
  user: {
    name: "",
    profiles: [],
  },
};

export const mainSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = {
          ...state.user,
          name: action.payload.email,
          profiles: [...action.payload.profiles],
        };
      }
    });
  },
});

export default mainSlice.reducer;
