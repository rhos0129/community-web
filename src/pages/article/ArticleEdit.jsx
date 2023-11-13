import React from "react";
import BasicLayout from "components/layout/BasicLayout";
import PageTitle from "components/article/PageTitle";
import ArticleForm from "components/article/ArticleForm";

const ArticleEdit = () => {
  return (
    <BasicLayout>
      <PageTitle title="게시글 수정" />
      <ArticleForm title="기존 제목입니다ㅏ" content="기존 내용입니다ㅏ" />
    </BasicLayout>
  );
};

export default ArticleEdit;
