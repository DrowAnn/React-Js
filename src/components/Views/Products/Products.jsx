import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to="/">Home</Link>
      <div>
        <Link to="/product/0">Ver producto</Link>
      </div>
    </div>
  );
};

export default Products;
