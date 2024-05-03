import { useDispatch, useSelector } from "react-redux";
import ToDos from "/src/components/ToDos/ToDos.jsx";
import toDosActions from "/src/Slicers/ToDosSlicer.jsx";
import { useState } from "react";

const ToDosView = () => {
  const [number, setNumber] = useState(100);

  const listaDeTodos = useSelector((Store) => {
    return Store.ToDos.toDosList;
  });

  const dispatch = useDispatch();

  const handlerAddToDo = function () {
    dispatch(toDosActions.agregarToDo(number));
    setNumber(number + 10);
  };

  const handlerRemoveLastToDo = () => {
    dispatch(toDosActions.borrarUltimoToDo());
  };

  const handlerRemoveEspecificToDo = (event) => {
    const index = event.target.attributes.indexvalue.value;
    dispatch(toDosActions.borrarToDoEspecifico(index));
  };

  return (
    <>
      <ToDos
        toDos={listaDeTodos}
        addToDo={handlerAddToDo}
        removeLastToDo={handlerRemoveLastToDo}
        removeEspecificToDo={handlerRemoveEspecificToDo}
      />
    </>
  );
};

export default ToDosView;
