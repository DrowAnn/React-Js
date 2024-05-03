import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Camisa</h1>
    </div>
  );
};

export default Product;
