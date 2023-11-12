import React from 'react'
import Layout from 'components/layout/Layout'
import { useParams } from 'react-router';
import { BsQuestionCircleFill } from 'react-icons/bs';
import PageTitle from 'components/article/PageTitle';
import List from 'components/article/List';
import Paging from 'components/article/Paging';
import Buttons from 'components/article/Buttons';


const ArticleList = () => {

  const params = useParams();

  const pageTitle = {
    title: params.title,
    desc: '간단한 설명입니다.',
    icon: <BsQuestionCircleFill size='3rem' />
  }

  const articleListItems = [
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "아주 긴 제목입니다ㅏㅏㅏ아ㅏ아아아아아아아아앙아ㅏㅏㅏㅏㅏ아아ㅏ아아ㅏㅏ",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
    {
      title: "제목입니다1",
      href: "/article/1",
      writer: "닉네임1",
      createDttm: "2023.01.23",
      viewCount: "10",
      commentCount: "5"
    },
  ]



  return (
    <Layout>
      <PageTitle title={pageTitle.title}
        desc={pageTitle.desc}
        icon={pageTitle.icon} />
      <Buttons />
      <Paging top />
      <List items={articleListItems} />
      <Paging />
    </Layout>
  )
}

export default ArticleList