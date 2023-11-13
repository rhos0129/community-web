import React from 'react'
import { Col, Container } from 'react-bootstrap'

const DefaultContainer = ({ children, row }) => {
  return (
    <Container fluid className='d-flex align-items-center'>
      <Col className='d-flex justify-content-start'>
        {children.slice(0, 1)}
      </Col>
      <Col className={'d-flex ' + (row ? 'justify-content-between' : 'flex-column align-items-center')} md={7} >
        {children.slice(1, -1)}
      </Col>
      <Col className='d-flex justify-content-end'>
        {children.slice(-1)}
      </Col>
    </Container>
  )
}

export default DefaultContainer