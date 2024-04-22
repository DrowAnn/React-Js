import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const saludo = "Hola";
  const nombre = "Robert";

  return (
    <>
      <h1>Bienvenido!</h1>
      <h2 className="h2-title">{`${saludo}, ${nombre}`}</h2>
      <Button
        onClick={() => {
          console.log("Hizo Click");
        }}
      >
        Clickeame!
      </Button>
    </>
  );
}

export default App;
