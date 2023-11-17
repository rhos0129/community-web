import React from "react";
import BasicLayout from "components/layout/BasicLayout";
import CommentForm from "components/article/CommentForm";

const ArticleDetail = () => {
  return (
    <BasicLayout>
      <div className="w-100 border p-4 rounded-4">
        <CommentForm />
      </div>
    </BasicLayout>
  );
};

export default ArticleDetail;
