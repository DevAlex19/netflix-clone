import { createSlice } from "@reduxjs/toolkit";
import { getMovies, getUser } from "../actions/actions";

type UserType = {
  name: string;
  profiles: string[];
};

export type MoviesType = {
  actors: string[];
  creator: string;
  description: string;
  name: string;
  poster: string;
  seasons: string;
  type: string[];
};

export type initialStateType = {
  user: UserType;
  movies: MoviesType[];
};
const initialState: initialStateType = {
  user: {
    name: "",
    profiles: [],
  },
  movies: [
    {
      actors: [],
      creator: "",
      description: "",
      name: "",
      poster: "",
      seasons: "",
      type: [],
    },
  ],
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
    builder.addCase(getMovies.fulfilled, (state, action: any) => {
      if (action.payload) {
        state.movies = [...action.payload];
      }
    });
  },
});

export default mainSlice.reducer;
