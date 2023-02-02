import React from "react";

function Category({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => filterItems(category)}
            type="button"
            key={index}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
