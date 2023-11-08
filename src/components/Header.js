import React from 'react'
import { Col, Container, Form, InputGroup, Stack, Nav, Row, Button } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import Logo from './layout/Logo';

const Header = () => {
    return (
        <header id='header' role='banner' className='sticky-top h-100 bg-white border-bottom border-2 mb-3' >
            <Container fluid="xl">
                <Row className='d-flex align-items-center'>
                    <Col className='d-flex justify-content-start'>
                        <Logo />
                    </Col>
                    <Col className='col-7 d-flex justify-content-between'>
                        <Nav>
                            <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover' >QnA</Nav.Link>
                            <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>스터디</Nav.Link>
                            <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>일상</Nav.Link>
                        </Nav>
                        <InputGroup className='border h-50' style={{ width: '40%', height: '38px' }}>
                            <InputGroup.Text className='border-0 bg-white'>
                                <BsSearch />
                            </InputGroup.Text>
                            <Form.Control className='border-0 shadow-none' placeholder="검색" />
                        </InputGroup>
                    </Col>
                    <Col className='d-flex justify-content-end text-wrap'>
                        <Stack gap={2} direction="horizontal" className="">
                            <Button className="text-bg-bluegray900 border-bluegray900">로그인</Button>
                            <Button className="border-bluegray900 bg-white text-black">회원가입</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header