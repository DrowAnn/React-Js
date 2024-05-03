import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = (props) => {
  const [Loading, setLoading] = useState(true);
  const params = useParams();
  const [list, setList] = useState([]);
  let arreglo = [];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        setLoading(false);
      });
  }, []);

  if (Loading) {
    return <h1>Is Loading...</h1>;
  }

  useEffect(() => {
    arreglo = [...list];
    console.log(arreglo);
  }, [list]);

  return (
    <div className={props.hide}>
      <Link to="/products">Volver</Link>
      <h1>{!Loading && console.log(arreglo)}</h1>
    </div>
  );
};

export default Product;
