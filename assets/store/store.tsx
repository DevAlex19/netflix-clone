import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mainSlice from "../reducers/mainSlice";

export const store = configureStore({
  reducer: mainSlice,
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
