import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [productData, setProductData] = useState({
    productId: "",
    sellingPrice: "",
    productName: "",
    category: "electronic",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(productData);
    setProductData({
      productId: "",
      sellingPrice: "",
      productName: "",
      category: "electronic",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        name="productId"
        value={productData.productId}
        onChange={handleChange}
        // placeholder="Product ID"
        required
      />

      <label htmlFor="sellingPrice">Selling Price:</label>
      <input
        type="number"
        name="sellingPrice"
        value={productData.sellingPrice}
        onChange={handleChange}
        // placeholder="Selling Price"
        required
      />
      <label htmlFor="productName">Product Name:</label>

      <input
        type="text"
        name="productName"
        value={productData.productName}
        onChange={handleChange}
        // placeholder="Product Name"
        required
      />
      <label htmlFor="category">Choose a Category:</label>
      <select
        name="category"
        value={productData.category}
        onChange={handleChange}
      >
        <option value="electronic">Electronic Items</option>
        <option value="food">Food Items</option>
        <option value="skincare">Skincare Items</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
