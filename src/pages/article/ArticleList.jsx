import React from 'react'
import Layout from 'components/layout/Layout'
import { useParams } from 'react-router';
import { Button, ButtonGroup, Dropdown, DropdownButton, ListGroup, Pagination, Stack } from 'react-bootstrap';
import { BsArrowLeftShort, BsArrowRightShort, BsEye, BsPencilSquare, BsQuestionCircleFill } from 'react-icons/bs';
import { LiaCommentDots } from 'react-icons/lia';
import { HiOutlineSortDescending } from 'react-icons/hi';
import SearchBox from 'components/common/SearchBox';


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
      <div className='w-100 text-bg-bluegray600 py-3 px-5 d-flex justify-content-between align-items-center rounded-3'>
        <div>
          <h2 className='mb-1'>제목 - {params.title}</h2>
          <p className='mb-1'>카테고리별 간단한 설명입니다.</p>
        </div>
        <BsQuestionCircleFill size='3rem' />
      </div>
      <div className='w-100 d-flex justify-content-between my-3'>
        <Button className='text-bg-bluegray800'>
          <BsPencilSquare className='me-1' />
          작성하기
        </Button>
        <DropdownButton className='text-bluegray900 border border-bluegray900' variant="white" as={ButtonGroup} title={
          <span>
            <HiOutlineSortDescending className='me-1' />
            최신순
          </span>
        } id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" active>최신순</Dropdown.Item>
          <Dropdown.Item eventKey="2">댓글순</Dropdown.Item>
          <Dropdown.Item eventKey="3">조회순</Dropdown.Item>
        </DropdownButton>
      </div>
      <Pagination className='w-100 d-flex justify-content-between align-items-center py-0 my-0 border-top py-2'>
        <Pagination.Prev disabled>
          <BsArrowLeftShort />
          <span>previous</span>
        </Pagination.Prev>
        <SearchBox placeholder='카테고리에서 검색' width='50%' />
        <Pagination.Next>
          <span>next</span>
          <BsArrowRightShort />
        </Pagination.Next>
      </Pagination>
      <ListGroup as='ul' className='w-100'>
        {
          articleListItems.map((article, key) => (
            <ListGroup.Item as='li' key={key} action className='border-start-0 border-end-0 rounded-0'>
              <h5 className='w-75 fw-bolder text-truncate fs-6'>
                <a href={article.href} className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>
                  {article.title}
                </a>
              </h5>
              <div className='d-flex justify-content-between align-items-start text-muted' style={{ fontSize: '0.875rem' }}>
                <small className='w-75'>{article.writer} | {article.createDttm}</small>
                <Stack gap={1} direction="horizontal">
                  <span>
                    <BsEye />
                    {article.viewCount}
                  </span>
                  <span>
                    <LiaCommentDots />
                    {article.commentCount}
                  </span>
                </Stack>
              </div>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <Pagination className='w-100 d-flex justify-content-between align-items-center py-0 my-0'>
        <Pagination.Prev disabled>
          <BsArrowLeftShort />
          <span>previous</span>
        </Pagination.Prev>
        <div className='d-flex border-start-0'>
          <Pagination.Item href='' active>1</Pagination.Item>
          <Pagination.Item href='' >2</Pagination.Item>
          <Pagination.Item href=''>3</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item href=''>999</Pagination.Item>
        </div>
        <Pagination.Next>
          <span>next</span>
          <BsArrowRightShort />
        </Pagination.Next>
      </Pagination>
    </Layout>
  )
}

export default ArticleList