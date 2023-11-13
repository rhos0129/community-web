import React from "react";

const Info = ({ texts }) => {
  return (
    <div className="fs-sm mt-3">
      {texts.map((text, key) => (
        <p className="my-0" key={key}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Info;
