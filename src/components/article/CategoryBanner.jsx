import React from "react";

const CategoryBanner = ({ category, desc, icon }) => {
  return (
    <div
      className={
        "w-100 d-flex justify-content-between align-items-center bg-bluegray-600 text-white rounded-3 py-3 px-5"
      }
    >
      <div>
        <h2 className="mb-1">{category}</h2>
        <p className="mb-1">{desc}</p>
      </div>
      {icon}
    </div>
  );
};

export default CategoryBanner;
