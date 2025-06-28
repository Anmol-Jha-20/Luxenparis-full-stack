import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice.jsx";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
