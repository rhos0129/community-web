import React from "react";
import Layout from "components/layout/Layout";
import PageTitle from "components/article/PageTitle";
import SimpleForm from "components/article/SimpleForm";

const ArticleEdit = () => {
  return (
    <Layout>
      <PageTitle title="게시글 수정하기" />
      <SimpleForm title="기존 제목입니다ㅏ" content="기존 내용입니다ㅏ"/>
    </Layout>
  );
};

export default ArticleEdit;
