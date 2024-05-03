import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDosList: [],
  cantidadDeTodos: 0,
};

const toDosSlice = createSlice({
  initialState,
  name: "ToDos",
  reducers: {
    agregarToDo: (state, { payload }) => {
      const newToDo = payload;
      state.toDosList = [...state.toDosList, newToDo];
    },
    borrarUltimoToDo: (state) => {
      const arrayState = [...state.toDosList];
      arrayState.pop();
      state.toDosList = arrayState;
    },
    borrarToDoEspecifico: (state, { payload }) => {
      const arrayState = [...state.toDosList];
      arrayState.splice(payload - 1, 1);
      state.toDosList = arrayState;
    },
  },
});

export const toDosReducer = toDosSlice.reducer;

export default toDosSlice.actions;
