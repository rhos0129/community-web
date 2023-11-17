import React from "react";
import { BsEye } from "react-icons/bs";

const AriticleView = ({ writer, createDttm, viewCount, title, content }) => {
  return (
    <div className="w-100">
      <div className="py-2 mb-4">
        <div className="fw-bolder">{writer}</div>
        <div className="text-muted">
          <span>{createDttm} </span>
          <span className="mx-1">|</span>
          <span>
            <BsEye />
            {viewCount}
          </span>
        </div>
      </div>
      <h2 className="">{title}</h2>
      <div className="my-5" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AriticleView;
