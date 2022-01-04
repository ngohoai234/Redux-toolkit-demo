import { createAsyncThunk } from "@reduxjs/toolkit";
import { counterActions } from "../counter/counterReducer";
import { fetchMovies } from "../movies/moviesActions";

// action thunk action creator object
// action creator pending -> run payload Creator -> fulfilled  or  rejected
// dispatch -> action creator object -> return promise
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (args, { signal }) => {
    console.log("Run payload creator");
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
  }
);
