import { useContext, useState } from "react";
import React from "react";
import "./App.css";

const userContext = React.createContext();

const Encabezado = () => {
  const User = useContext(userContext);

  return (
    <div>
      <h1>Bienvenido</h1>
      <div>
        <img src={User.foto} style={{ width: "100px" }} />
      </div>
    </div>
  );
};

const Perfil = () => {
  const User = useContext(userContext);

  return (
    <div>
      <h2>Nombre: {User.nombre}</h2>
      <h2>Apellido: {User.apellido}</h2>
    </div>
  );
};

function App() {
  const User = {
    nombre: "Robert",
    apellido: "Delgado",
    foto: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
  };

  return (
    <>
      <userContext.Provider value={User}>
        <Encabezado />
        <Perfil />
      </userContext.Provider>
    </>
  );
}

export default App;
