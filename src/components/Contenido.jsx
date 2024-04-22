import Encabezado from "./Encabezado";
import Footer from "./Footer";

const Contenido = (props) => {
  return (
    <div style={{ backgroundColor: "Black" }}>
      <Encabezado titulo="Encabezado 2" />
      {props.children}
      <Footer titulo="Footer 2" />
    </div>
  );
};

export default Contenido;
