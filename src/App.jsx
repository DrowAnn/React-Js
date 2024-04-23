import "./App.css";
import Boton from "./components/Boton/index";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cargaBoton, setCargaBoton] = useState(false);
  const [listaProductos, setListaDeProductos] = useState([]);
  const [tituloLista, setTituloLista] = useState(false);
  const [bienvenida, setBienvenida] = useState(true);

  // useEffect(() => {
  //   console.log("Montaje");

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setTimeout(() => {
  //       setListaDeProductos(json);
  //       setIsLoading(false);
  //     }, 2000);
  //   });

  //   return () => {
  //     console.log("Desmontaje");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (listaProductos.length) {
  //     alert("La lista ha sido cargada con exito!");
  //   }
  // }, [listaProductos]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  useEffect(() => {
    setTimeout(() => {
      setBienvenida(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, 2500);
  }, []);

  if (bienvenida) {
    return <h1>Bienvenido</h1>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Manejo de Lista</h1>
      <Boton
        color="Blue"
        onClick={() => {
          setCargaBoton(true);
          fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
              setTimeout(() => {
                setListaDeProductos(json);
                setCargaBoton(false);
                setTituloLista(true);
              }, 1500);
            });
        }}
        cargando={cargaBoton}
      >
        Imprimir Lista
      </Boton>
      <Boton
        color="Red"
        onClick={() => {
          setListaDeProductos([]);
          setTituloLista(false);
          // alert("Se eliminara la visra de los productos");
        }}
      >
        Borrar Lista
      </Boton>
      <h1>{tituloLista ? "Lista de Productos" : ""}</h1>
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
