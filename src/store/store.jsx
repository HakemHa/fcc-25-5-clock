import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./slice";

const store = configureStore({
    reducer: { do: timeReducer },
});

export default store;