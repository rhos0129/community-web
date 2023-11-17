import React from "react";

const CommentView = ({ writer, createDttm, content }) => {
  return (
    <div>
      <div className="py-2">
        <div className="fw-bolder">{writer}</div>
        <div className="text-muted">
          <span>{createDttm} </span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default CommentView;
