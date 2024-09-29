import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="gallery">
      {products.map((product) => (
        <div key={product.id} className="image">
          <span>
            <img src={product.src} alt={product.category} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
