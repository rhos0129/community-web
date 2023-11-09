import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import Logo from 'components/layout/Logo';
import GridContainer from 'components/layout/GridContainer';
import SimpleNav from 'components/layout/SimpleNav';
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
        <header id='header' role='banner' className='sticky-top h-100 bg-white border-bottom border-2 mb-3' >
            <GridContainer row>
                <Logo />
                <SimpleNav items={navItems}/>
                <SearchBox placeholder='검색' width='40%'/>
                <Stack gap={2} direction="horizontal">
                    <Button className="rounded-5 border-bluegray900 bg-white text-black" href='/login' style={{ fontSize: '0.875rem' }}>로그인</Button>
                    <Button className="rounded-5 text-bg-bluegray900 border-bluegray900" href='/signup' style={{ fontSize: '0.875rem' }}>회원가입</Button>
                </Stack>
            </GridContainer>
        </header>
    )
}

export default Header