import { createSelector } from "@reduxjs/toolkit";
import { MoviesType } from "../reducers/mainSlice";

export const Shows: any = createSelector(
  [(state) => state],
  ({ state: { movies }, pathname }) => {
    if (!pathname.includes("noi-si-populare")) {
      const result = movies.filter((movie: MoviesType) => {
        return pathname.includes("seriale")
          ? +movie.seasons > 0
          : +movie.seasons === 0;
      });
      return result;
    }

    return movies.slice(movies.length - 50);
  }
);
