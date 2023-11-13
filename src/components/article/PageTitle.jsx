import React from "react";

const PageTitle = ({ title, desc, className }) => {
  return (
    <div
      className={
        "w-100 d-flex justify-content-between align-items-center " + className
      }
    >
      <div>
        <h2 className="mb-1">{title}</h2>
        <p className="mb-1">{desc}</p>
      </div>
    </div>
  );
};

export default PageTitle;
