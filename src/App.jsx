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
      <Button>Segundo Botón</Button>
    </>
  );
}

export default App;
