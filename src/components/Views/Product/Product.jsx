import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
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

  if (Loading) {
    return <h1>Is Loading...</h1>;
  }

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
      <h3>Calificacion: {detalles.rating.rate}</h3>
      <p>Cantidad de Votos: {detalles.rating.count}</p>
      {/* <h3>Calificacion: {((detalles || {}).rating || {}).rate}</h3>
      <p>Cantidad de Votos: {((detalles || {}).rating || {}).count}</p> */}
    </div>
  );
};

export default Product;
