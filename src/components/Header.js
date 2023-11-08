import React from 'react'
import { Col, Container, Form, InputGroup, Stack, Nav, Row, Button } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import Logo from './layout/Logo';
import GridContainer from 'components/layout/GridContainer';

const Header = () => {
    return (
        <header id='header' role='banner' className='sticky-top h-100 bg-white border-bottom border-2 mb-3' >
            <GridContainer>
                <Logo />
                <Nav>
                    <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>QnA</Nav.Link>
                    <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>스터디</Nav.Link>
                    <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>일상</Nav.Link>
                </Nav>
                <InputGroup className='border h-50' style={{ width: '40%', height: '38px' }}>
                    <InputGroup.Text className='border-0 bg-white'>
                        <BsSearch />
                    </InputGroup.Text>
                    <Form.Control className='border-0 shadow-none' placeholder="검색" />
                </InputGroup>
                <Stack gap={2} direction="horizontal" className="">
                    <Button className="border-bluegray900 bg-white text-black">로그인</Button>
                    <Button className="text-bg-bluegray900 border-bluegray900">회원가입</Button>
                </Stack>
            </GridContainer>
        </header>
    )
}

export default Header