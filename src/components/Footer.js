import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import Logo from './layout/Logo';
import GridContainer from './layout/GridContainer';

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo' className='bg-white border-top border-2 mt-3 mb-2'>
            <GridContainer column>
                <Logo />
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
                <div className='d-flex'>
                    <div className='me-2'>
                        <span className='text-bluegray800 fw-bolder me-1' >FE</span>
                        <a href='/' target='_black' rel='noopener noreferrer' aria-label='github'
                            className='link-bluegray800'>
                            <span><BsGithub className='mx-1' style={{ width: '16px', height: '18px' }} /></span>
                        </a>
                        <a href='/' target='_black' rel='noopener noreferrer' aria-label='notion'
                            className='link-bluegray800'>
                            <span><SiNotion className='me-1' style={{ width: '18px', height: '18px' }} /></span>
                        </a>
                    </div>
                    <div className='ms-2'>
                        <span className='text-bluegray800 fw-bolder me-1' >BE</span>
                        <a href='/' target='_black' rel='noopener noreferrer' aria-label='github'
                            className='link-bluegray800'>
                            <span><BsGithub className='mx-1' style={{ width: '16px', height: '18px' }} /></span>
                        </a>
                        <a href='/' target='_black' rel='noopener noreferrer' aria-label='notion'
                            className='link-bluegray800'>
                            <span><SiNotion className='me-1' style={{ width: '18px', height: '18px' }} /></span>
                        </a>
                    </div>
                </div>
            </GridContainer>
        </footer>
    )
}

export default Footer