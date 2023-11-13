import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import Logo from 'components/common/Logo';
import DefaultContainer from 'components/layout/DefaultContainer';
import SimpleNav from 'components/layout/header/SimpleNav';
import SearchBox from 'components/common/SearchBox';

const Header = () => {

  const navItems = [
    {
      title: "QnA",
      href: "/articles/qna",
    },
    {
      title: "스터디",
      href: "/articles/study",
    },
    {
      title: "일상",
      href: "/articles/life",
    },
  ]

  return (
    <header id='header' role='banner'
      className='sticky-top h-100 bg-white border-bottom border-2 mb-3'>
      <DefaultContainer row>
        <Logo />
        <SimpleNav items={navItems} />
        <SearchBox placeholder='전체 검색' width='40%' />
        <Stack direction='horizontal' gap={1} >
          <Button className='rounded-5 border-bluegray-900 bg-white text-black fs-sm'
            href='/login' >
            로그인
          </Button>
          <Button className='rounded-5 bg-bluegray-900 border-bluegray-900 fs-sm'
            href='/signup'>
            회원가입
          </Button>
        </Stack>
      </DefaultContainer>
    </header>
  )
}

export default Header