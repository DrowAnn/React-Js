import "./boton.css";
import PropTypes from "prop-types";

const Boton = (props) => {
  return (
    <>
      <button
        className="boton"
        style={{ backgroundColor: props.color }}
        onClick={props.onClick}
        disabled={props.cargando}
      >
        {props.cargando ? "Loading..." : props.children}
      </button>
    </>
  );
};

Boton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  cargando: PropTypes.bool,
};

export default Boton;
