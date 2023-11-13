import React from "react";

const SimpleLayout = ({ children }) => {
  return (
    <div className="mx-auto my-5" style={{ maxWidth: "25rem" }}>
      {children}
    </div>
  );
};

export default SimpleLayout;
