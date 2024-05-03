import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDosList: [],
  cantidadDeTodos: 0,
};

const toDosSlice = createSlice({
  initialState,
  name: "ToDos",
  reducers: {
    agregarToDo: (state, { paylod }) => {
      const newToDo = paylod;
      state.toDosList = [...state.toDosList, newToDo];
    },
    borrarToDo: (state, { paylod }) => {},
  },
});

export const toDosReducer = toDosSlice.reducer;

export default toDosSlice.actions;
