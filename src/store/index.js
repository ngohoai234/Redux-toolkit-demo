import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import shopSlice from "./shop/shopSlice";
import movieSlice from "./movies/movieSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    shop: shopSlice.reducer,
    movie: movieSlice.reducer,
  },
});
export default store;
