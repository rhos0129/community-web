import React from 'react'
import Layout from 'components/layout/Layout'
import { useParams } from 'react-router';
import { ListGroup, Stack } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs';
import { LiaCommentDots } from 'react-icons/lia';


const ArticleList = () => {

  const params = useParams();

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
      ArticleList - {params.title}
      <ListGroup as='ul' className='w-100'>
        {
          articleListItems.map((article, key) => (
            <ListGroup.Item as='li' key={key} action className='border-start-0 border-end-0'>
              <h5 className='w-75 fw-bolder text-truncate fs-6'>
                <a href={article.href} className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>
                  {article.title}
                </a>
              </h5>
              <div className='d-flex justify-content-between align-items-start text-muted'>
                <small className='w-75'>{article.writer} | {article.createDttm}</small>
                <Stack gap={1} direction="horizontal">
                  <small>
                    <BsEye size='1.025rem' />
                    {article.viewCount}
                  </small>
                  <small>
                    <LiaCommentDots size='1.025rem' />
                    {article.commentCount}
                  </small>
                </Stack>
              </div>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Layout >
  )
}

export default ArticleList