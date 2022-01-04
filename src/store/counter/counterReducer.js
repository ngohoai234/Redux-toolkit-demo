import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: {
      prepare: (value) => {
        const id = nanoid();
        return {
          payload: {
            value,
            id,
          },
        };
      },
      reducer: (state, action) => {
        state.value++;
      },
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
