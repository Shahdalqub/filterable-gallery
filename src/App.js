import React, { useState } from "react";
import ProductList from "./ProductList"; 
import FilterButtons from "./FilterButtons"; 
import "./App.css"; 

// Sample data array with product images and categories
const productsData = [
  { id: 1, src: "images/bag-1.jpg", category: "bag" },
  { id: 2, src: "images/headphone-1.jpg", category: "headphone" },
  { id: 3, src: "images/camera-1.jpg", category: "camera" },
  { id: 4, src: "images/shoe-1.jpg", category: "shoe" },
  { id: 5, src: "images/headphone-2.jpg", category: "headphone" },
  { id: 6, src: "images/watch-1.jpg", category: "watch" },
  { id: 7, src: "images/shoe-2.jpg", category: "shoe" },
  { id: 8, src: "images/camera-2.jpg", category: "camera" },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  // Function to filter products based on the selected category
  const filteredProducts = productsData.filter((product) =>
    activeFilter === "all" ? true : product.category === activeFilter
  );

  return (
    <div className="App">
      {/* Passing event handler and active filter to FilterButtons */}
      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      {/* Passing filtered products to ProductList */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
