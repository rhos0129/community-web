import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'

const Basic = (props) => {
  return (
    <>
      <Header />
      <main id='main' role='main'>
        <Container className='h-100 text-center'>
          <Row className='h-100 text-bg-bluegray400 fs-1 fw-bold'>
            <Col>
              <div>left</div>
            </Col>
            <Col className='col-8 bg-bluegray500'>
              {props.children}
            </Col>
            <Col>
              <div>right</div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Basic