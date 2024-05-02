import { useContext, useState } from "react";
import React from "react";
import "./App.css";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Cantidad de Clicks</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador}
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <Contador />
    </>
  );
}

export default App;
