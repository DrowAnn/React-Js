import { useDispatch, useSelector } from "react-redux";
import ToDos from "/src/components/ToDos/ToDos.jsx";
import toDosActions from "/src/Slicers/ToDosSlicer.jsx";

const ToDosView = () => {
  const listaDeTodos = useSelector((Store) => {
    return Store.ToDos.toDosList;
  });
  const dispatch = useDispatch();
  const handlerAddToDo = () => {
    dispatch(toDosActions.agregarToDo("Nuevo ToDo"));
  };
  return (
    <>
      <ToDos toDos={listaDeTodos} addToDo={handlerAddToDo} />
    </>
  );
};

export default ToDosView;
