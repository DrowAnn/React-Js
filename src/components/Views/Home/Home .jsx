import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido al Home</h1>
      <Link style={{ fontSize: "larger" }} to="products">
        Ver lista de Productos
      </Link>
    </div>
  );
};

export default Home;
