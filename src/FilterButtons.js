import React from "react";

const categories = ["all", "bag", "shoe", "watch", "camera", "headphone"];

const FilterButtons = ({ activeFilter, onFilterChange }) => {
  return (
    <nav>
      <div className="items">
        {categories.map((category) => (
          <span
            key={category}
            className={`item ${activeFilter === category ? "active" : ""}`}
            onClick={() => onFilterChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default FilterButtons;
