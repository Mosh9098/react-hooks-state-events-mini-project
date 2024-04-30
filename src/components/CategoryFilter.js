import React from "react";

function CategoryFilter({categories,selectedCategory,onFilterChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-filter ${category === selectedCategory ? "selected" : ""}`}
          onClick = {() => onFilterChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
