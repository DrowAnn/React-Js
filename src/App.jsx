import "./App.css";
import Boton from "./components/Boton/index";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [listaProductos, setListaDeProductos] = useState([]);

  useEffect(() => {
    console.log("Montaje");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setListaDeProductos(json);
          setIsLoading(false);
        }, 2000);
      });

    return () => {
      console.log("Desmontaje");
    };
  }, []);

  useEffect(() => {
    if (listaProductos.length) {
      alert("La lista ha sido cargada con exito!");
    }
  }, [listaProductos]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Lista de Productos</h1>
      {listaProductos.map((product, index) => {
        return (
          <div key={index.toString()}>
            <h2>{`${(index + 1).toString()}. ${product.title}`}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
