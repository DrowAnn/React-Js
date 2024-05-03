import { useState } from "react";

const ToDos = ({ toDos, addToDo, removeLastToDo, removeEspecificToDo }) => {
  const [index, setIndex] = useState("");

  const handleIndexChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <>
      <h2>My ToDos</h2>
      {toDos.map((toDo, index) => {
        return <p key={index.toString()}>{`${index + 1}. ${toDo}`}</p>;
      })}

      <button style={{ margin: "15px" }} onClick={addToDo}>
        Add ToDo
      </button>

      <button style={{ margin: "15px" }} onClick={removeLastToDo}>
        Remove Last ToDo
      </button>

      <form
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <label style={{ margin: "15px" }}>
          Digite el numero del Index a borrar:
        </label>
        <input
          type="number"
          style={{ margin: "15px" }}
          placeholder="Numero solamente"
          onChange={handleIndexChange}
        />
        <button
          style={{ margin: "15px" }}
          indexvalue={index}
          onClick={removeEspecificToDo}
        >
          Remove
        </button>
      </form>
    </>
  );
};

export default ToDos;
