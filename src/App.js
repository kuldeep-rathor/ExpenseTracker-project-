import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Update local storage when products state changes
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(
      (product) => product !== productToDelete
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>E-commerce Website</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
