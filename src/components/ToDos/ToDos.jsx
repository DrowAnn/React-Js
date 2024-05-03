const ToDos = ({ toDos, addToDo }) => {
  console.log("RENDER CHILD");

  return (
    <>
      <h2>My ToDos</h2>
      {toDos.map((toDo, index) => {
        return <p key={index.toString()}>{toDo}</p>;
      })}

      <button onClick={addToDo}>Add ToDo</button>
    </>
  );
};

export default ToDos;
