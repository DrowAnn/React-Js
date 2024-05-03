import { useState } from "react";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormulario({ ...formulario, [name]: value });
    console.log(formulario);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", formulario);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
