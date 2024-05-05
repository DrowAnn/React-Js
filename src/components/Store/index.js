import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "../../Slicers/CarritoSlicer";

const Store = configureStore({
  reducer: {
    Carrito: carritoReducer,
  },
});

export default Store;
