import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = {
          ...state.user,
          name: action.payload.email,
          profiles: [...action.payload.profiles],
          selected: action.payload.email,
        };
      }
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

export default mainSlice.reducer;
