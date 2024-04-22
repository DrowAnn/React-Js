import "./App.css";
import Encabezado from "./components/Encabezado";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";
import Boton from "./components/Boton/index";

function App() {
  return (
    <>
      <Encabezado titulo="Encabezado 1" />
      <Contenido>
        Hola Brother
        <Boton>Clickeame</Boton>
      </Contenido>
      <Footer titulo="Footer 1" />
    </>
  );
}

export default App;
