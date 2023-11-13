import React from "react";

const Sns = ({ group, items }) => {
  return (
    <div className="m-2">
      <span className="text-bluegray-800 fw-bolder text-uppercase me-2">
        {group}
      </span>
      {items.map((item, key) => (
        <a
          className="link-bluegray-800 me-1"
          key={key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Sns;
