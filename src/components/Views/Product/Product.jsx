import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [detalles, setDetalles] = useState("");
  const { id } = useParams();
  let rating = "";

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDetalles(json);
      });
  }, [id]);

  const Calificacion = (props) => {
    if (props) {
      return (
        <>
          <h3>Calificacion: {props.data.rate}</h3>
          <p>Cantidad de Votos: {props.data.count}</p>
        </>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <Link to="/products">Volver</Link>
      <h1>
        {id}. {detalles.title}
      </h1>
      <img style={{ width: "140px" }} src={detalles.image} />
      <p>{detalles.description}</p>
      <p>Precio: ${detalles.price}</p>
      <p>Categotia: {detalles.category}</p>
      <Calificacion data={detalles.rating} />
    </div>
  );
};

export default Product;
