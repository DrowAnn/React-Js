import { configureStore } from "@reduxjs/toolkit";
import { toDosReducer } from "/src/Slicers/ToDosSlicer.jsx";

const Store = configureStore({
  reducer: {
    ToDos: toDosReducer,
  },
});

export default Store;
