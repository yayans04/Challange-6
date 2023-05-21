import { combineReducers } from "redux";
import movies from "./features/movieSlice";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  movies,
});

export const store = configureStore({
  reducer: rootReducer,
});
