import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./moviesActions";
const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default moviesSlice;
