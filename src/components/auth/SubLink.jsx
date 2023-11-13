import React from "react";

const SubLink = ({ text, to, href }) => {
  return (
    <div className="text-center fs-sm">
      <span className="me-2">{text}</span>
      <a className="text-blue" href={href}>
        {to}
      </a>
    </div>
  );
};

export default SubLink;
