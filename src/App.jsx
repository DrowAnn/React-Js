import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <h1>Test Mostrar</h1>
      <button
        onClick={() => {
          setMostrar(!mostrar);
        }}
      >
        Click para {mostrar ? "Ocultar" : "Mostrar"}
      </button>
      {mostrar && <p>Existo</p>}
    </>
  );
}

export default App;
