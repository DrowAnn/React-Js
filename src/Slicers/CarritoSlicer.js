import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const carritoSlice = createSlice({
  initialState,
  name: "Carrito",
  reducers: {
    agregarAlCarrito: (state, action) => {
      const producto = action.payload;
      state.products.push(producto);
    },
    borrarProducto: (state, action) => {
      const arreglo = [...state.products];
      arreglo.splice(action.payload, 1);
      state.products = arreglo;
    },
  },
});

export const carritoReducer = carritoSlice.reducer;

export default carritoSlice.actions;
