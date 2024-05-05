import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import accionesCarrito from "/src/Slicers/CarritoSlicer.js";

const Product = () => {
  const dispatch = useDispatch();
  const [detalles, setDetalles] = useState("");
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDetalles(json);
        setLoading(false);
      });
  }, [id]);

  // if (Loading) {
  //   return <h1>Is Loading...</h1>;
  // }

  const handleAgregarCarrito = () => {
    alert(`${detalles.title} fue agragado con exito al carrito`);
    dispatch(accionesCarrito.agregarAlCarrito(detalles));
  };

  return (
    <div>
      <Link style={{ margin: "15px", fontSize: "larger" }} to="/products">
        Volver
      </Link>
      <Link style={{ fontSize: "larger" }} to={"/carritocompras"}>
        Ver Carrito
      </Link>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>
            {id}. {detalles.title}
          </h1>
          <img style={{ width: "140px" }} src={detalles.image} />
          <p>{detalles.description}</p>
          <p>Precio: ${detalles.price}</p>
          <p>Categotia: {detalles.category}</p>
          <h3>Calificacion: {detalles.rating.rate}</h3>
          <p>Cantidad de Votos: {detalles.rating.count}</p>
          <button
            onClick={() => {
              handleAgregarCarrito();
            }}
          >
            Agregar al Carrito
          </button>
        </>
      )}
      {/* <h3>Calificacion: {((detalles || {}).rating || {}).rate}</h3>
      <p>Cantidad de Votos: {((detalles || {}).rating || {}).count}</p> */}
    </div>
  );
};

export default Product;
