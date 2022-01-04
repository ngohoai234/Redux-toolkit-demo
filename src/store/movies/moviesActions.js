import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { GET_MOVIES } from "./../../api/moviesAPI";
import axios from "axios";
// returns a standard Redux thunk action creator
// The thunk action creator function will have plain action creators for the pending, fulfilled, and rejected cases attached as nested fields.
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(`${GET_MOVIES}`);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});
