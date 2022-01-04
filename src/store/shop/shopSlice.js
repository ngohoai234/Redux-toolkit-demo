import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./shopActions";

const initialState = {
  data: [],
  isToggle: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setIsToggle: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice;
