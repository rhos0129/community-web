import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <Container className='h-100 text-center'>
                <Row className='h-100 text-bg-bluegray800'>
                    <Col className='d-flex justify-content-start'>
                        <span className='border'>로고</span>

                    </Col>
                    <Col className='col-8 bg-bluegray900 d-flex flex-column justify-content-between'>
                        <div className='border px-5'>
                            공지사항, 문의 등
                        </div>
                        <div className='border px-5'>
                            단순정보
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end text-wrap'>
                        <span className='border'>관련SNS</span>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer