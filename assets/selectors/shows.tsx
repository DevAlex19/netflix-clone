import { createSelector } from "@reduxjs/toolkit";
import { MoviesType } from "../reducers/mainSlice";

export const Shows: any = createSelector(
  [(state) => state],
  ({ state: { movies }, pathname, query }) => {
    if (pathname.includes("search")) {
      const result = movies.filter((movie: MoviesType) => {
        const movieName = movie.name?.replaceAll(" ", "").toLowerCase();
        return movieName?.includes(query.q?.toLowerCase());
      });

      return result;
    }
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
