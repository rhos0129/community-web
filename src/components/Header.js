import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Container className='h-100 text-center'>
                <Row className='h-100 text-bg-bluegray800'>
                    <Col className='d-flex justify-content-start'>
                        <span className='border'>로고</span>
                    </Col>
                    <Col className='col-8 bg-bluegray900 d-flex justify-content-between'>
                        <div className='border px-5'>
                            카테고리
                        </div>
                        <div className='border px-5'>
                            키워드검색
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end text-wrap'>
                        <div className='border'>
                            로그인
                        </div>
                        <div className='border'>
                            회원가입
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header