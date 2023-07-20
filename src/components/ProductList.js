import React from "react";

const ProductList = ({ products, onDelete }) => {
  const categorizedProducts = {
    electronic: [],
    food: [],
    skincare: [],
  };

  // Categorize the products
  products.forEach((product) => {
    categorizedProducts[product.category].push(product);
  });

  return (
    <div>
      <h2>Products List</h2>
      <div>
        <h3>Electronic Items</h3>
        <ul>
          {categorizedProducts.electronic.map((product, index) => (
            <li key={index}>
              <strong>Product ID:</strong> {product.productId},{" "}
              <strong>Price:</strong> {product.sellingPrice},{" "}
              <strong>Name:</strong> {product.productName}
              <button onClick={() => onDelete(product)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Food Items</h3>
        <ul>
          {categorizedProducts.food.map((product, index) => (
            <li key={index}>
              <strong>Product ID:</strong> {product.productId},{" "}
              <strong>Price:</strong> {product.sellingPrice},{" "}
              <strong>Name:</strong> {product.productName}
              <button onClick={() => onDelete(product)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Skincare Items</h3>
        <ul>
          {categorizedProducts.skincare.map((product, index) => (
            <li key={index}>
              <strong>Product ID:</strong> {product.productId},{" "}
              <strong>Price:</strong> {product.sellingPrice},{" "}
              <strong>Name:</strong> {product.productName}
              <button onClick={() => onDelete(product)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
