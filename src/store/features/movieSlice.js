import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../api";
import { searchMovie } from "../../api";

const initialState = {
  data: [],
  detail: [],
};

export const fetchMovie = createAsyncThunk("getAllMovies", async () => {
  try {
    const response = await movieAPI.getAllMovies();
    console.log(response);
    return response.results;
  } catch (err) {
    console.log(err);
  }
});

export const getSearchMovie = createAsyncThunk("searchMovies", async (q) => {
  try {
    const response = await movieAPI.searchMovies(q);
    console.log(response);
    return response.results;
  } catch (err) {
    console.log(err);
  }
});

export const getDetailMovie = createAsyncThunk("detailMovie", async (id) => {
  try {
    const response = await movieAPI.detailMovie(id);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getSearchMovie.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getDetailMovie.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});

export default movieSlice.reducer;
