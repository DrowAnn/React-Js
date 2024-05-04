import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export const ListContext = React.createContext();

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
      });
  }, []);

  return (
    <div>
      <Link style={{ fontSize: "larger" }} to="/">
        Home
      </Link>
      <h1>Lista de Productos</h1>
      <ol className="Lista">
        {list.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Products;
