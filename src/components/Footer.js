import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { GoCodeReview } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo' className='bg-white border-top border-2 mt-3 mb-2'>
            <Container fluid="xl">
                <Row className='d-flex align-items-center h-100'>
                    <Col className='d-flex justify-content-start'>
                        <h1 className='h3 mt-2 mb-1 mx-2 d-flex align-items-center'>
                            <a href='/' className='link-bluegray800 link-underline-opacity-0' >
                                <GoCodeReview className='mx-1' style={{ width: '40px', height: '40px' }} />
                                <span className='fw-bold text-uppercase'>com</span>
                            </a>
                        </h1>
                    </Col>
                    <Col className='col-7 d-flex flex-column align-items-center'>
                        <Nav>
                            <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover' >
                                공지사항
                            </Nav.Link>
                            <Nav.Link href='' className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>
                                버그제보
                            </Nav.Link>
                        </Nav>
                        <div className='' style={{ fontSize: '12px' }}>
                            <p className='my-0'>공부 목적으로 만들어보는 간단한 개발자 커뮤니티</p>
                            <p className='my-0'>기술스택 : react, bootstrap, spring, jpa </p>
                            <p className='my-0'>© 2023 (주)Com, Inc. All rights reserved.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <div className='me-2'>
                            <span className='text-bluegray800 fw-bolder me-1' >FE</span>
                            <a href='/' target='_black' rel='noopener noreferrer' aria-label='github'
                                className='link-bluegray800'>
                                <span><BsGithub style={{ width: '16px', height: '18px' }} /></span>
                            </a>
                            <a href='/' target='_black' rel='noopener noreferrer' aria-label='notion'
                                className='link-bluegray800'>
                                <span><SiNotion className='mx-1' style={{ width: '18px', height: '18px' }} /></span>
                            </a>
                        </div>
                        <div className='ms-2'>
                            <span className='text-bluegray800 fw-bolder me-1' >BE</span>
                            <a href='/' target='_black' rel='noopener noreferrer' aria-label='github'
                                className='link-bluegray800'>
                                <span><BsGithub style={{ width: '16px', height: '18px' }} /></span>
                            </a>
                            <a href='/' target='_black' rel='noopener noreferrer' aria-label='notion'
                                className='link-bluegray800'>
                                <span><SiNotion className='mx-1' style={{ width: '18px', height: '18px' }} /></span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer