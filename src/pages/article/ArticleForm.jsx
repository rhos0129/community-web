import React from "react";
import Layout from "components/layout/Layout";
import SimpleForm from "components/article/SimpleForm";
import PageTitle from "components/article/PageTitle";

const ArticleForm = () => {
  const pageTitle = {
    title: '함께 할 때 더 즐거운 순간',
    desc: "어떤개발자님 지식공유 플랫폼 OKKY에서 다양한 사람을 만나고 생각의 폭을 넓혀보세요.",
  };

  return (
    <Layout>
      <PageTitle
        title={pageTitle.title}
        desc={pageTitle.desc}
      />
      <SimpleForm />
    </Layout>
  );
};

export default ArticleForm;
