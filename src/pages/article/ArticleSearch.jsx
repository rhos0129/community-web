import React from "react";
import BasicLayout from "components/layout/BasicLayout";
import { useParams } from "react-router";
import { BsQuestionCircleFill } from "react-icons/bs";
import ArticleList from "components/article/ArticleList";
import CustomPagination from "components/article/CustomPagination";
import ArticleNav from "components/article/ArticleNav";
import CategoryBanner from "components/article/CategoryBanner";

const ArticleSearch = () => {
  const params = useParams();

  const categoryBanner = {
    category: params.category,
    desc: "간단한 설명입니다.",
    icon: <BsQuestionCircleFill size="3rem" />,
  };

  const articleListItems = [
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title:
        "아주 긴 제목입니다ㅏㅏㅏ아ㅏ아아아아아아아아앙아ㅏㅏㅏㅏㅏ아아ㅏ아아ㅏㅏ",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5",
    },
  ];

  return (
    <BasicLayout>
      <CategoryBanner
        category={categoryBanner.category}
        desc={categoryBanner.desc}
        icon={categoryBanner.icon}
      />
      <ArticleNav />
      <CustomPagination top />
      <ArticleList items={articleListItems} />
      <CustomPagination />
    </BasicLayout>
  );
};

export default ArticleSearch;
