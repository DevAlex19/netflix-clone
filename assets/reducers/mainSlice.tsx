import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import {
  addProfileName,
  getMovies,
  getUser,
  deleteProfileName,
} from "../actions/actions";

type UserType = {
  name: string;
  profiles: string[];
  selected: string;
  loading: boolean;
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
  moviesLoading: boolean;
};
const initialState: initialStateType = {
  user: {
    name: "",
    profiles: [],
    selected: "",
    loading: false,
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
  moviesLoading: false,
};

export const mainSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectProfile(state, action) {
      state.user = { ...state.user, selected: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.user = { ...state.user, loading: true };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = {
          ...state.user,
          name: action.payload.email,
          profiles: [...action.payload.profiles],
          selected: action.payload.email,
        };
      }
      state.user = { ...state.user, loading: false };
    });
    builder.addCase(getMovies.pending, (state, action: any) => {
      state.moviesLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action: any) => {
      if (action.payload) {
        state.movies = [...action.payload];
      }
      state.moviesLoading = false;
    });
    builder.addCase(addProfileName.fulfilled, (state, action) => {
      state.user = { ...state.user, profiles: [...action.payload] };
    });
    builder.addCase(deleteProfileName.fulfilled, (state, action) => {
      state.user = { ...state.user, profiles: [...action.payload] };
    });
  },
});

export const { selectProfile } = mainSlice.actions;

export default mainSlice.reducer;
