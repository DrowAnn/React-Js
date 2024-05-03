import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/components/Views/Home/Home ";
import Products from "/src/components/Views/Products/Products";
import Product from "../Views/Product/Product";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
