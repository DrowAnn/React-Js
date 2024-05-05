import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import accionesCarrito from "/src/Slicers/CarritoSlicer.js";

const Carrito = () => {
  const dispatch = useDispatch();
  let acumulado = 0;

  const productosAgregados = useSelector((state) => {
    console.log(state);
    return state.Carrito.products;
  });

  const precioTotal = (productos) => {
    productos.map((product) => {
      acumulado += product.price;
    });

    return acumulado;
  };

  const handlerBorrar = (id) => {
    dispatch(accionesCarrito.borrarProducto(id));
  };

  const renderizarProductos = (productos) => {
    return productos.map((product, index) => {
      return (
        <li key={index.toString()}>
          <h2>Producto: {product.title}</h2>
          <img style={{ width: "120px" }} src={product.image} />
          <p>Price: {product.price}</p>
          <button
            onClick={() => {
              handlerBorrar(index);
            }}
          >
            Eliminar este producto
          </button>
        </li>
      );
    });
  };

  return (
    <div>
      <Link style={{ margin: "15px", fontSize: "larger" }} to="/products">
        Volver
      </Link>
      <h1>Carrito de Compras</h1>
      {/* <ol>
        {productosAgregados.map((product, index) => {
          return (
            <li key={index.toString()}>
              <h2>Producto: {product.title}</h2>
              <img style={{ width: "120px" }} src={product.image} />
              <p>Price: {product.price}</p>
              <button
                onClick={() => {
                  handlerBorrar(index);
                }}
              >
                Eliminar este producto
              </button>
            </li>
          );
        })}
      </ol> */}
      <ol>{renderizarProductos(productosAgregados)}</ol>
      <h2>Pago Total: {precioTotal(productosAgregados)}</h2>
    </div>
  );
};

export default Carrito;
