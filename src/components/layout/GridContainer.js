import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'


const GridContainer = (props) => {
    return (
        <Container fluid="xl">
            {props.comlumn}
            <Row className='d-flex align-items-center'>
                <Col className='d-flex justify-content-start'>
                    {props.children.slice(0, 1)}
                </Col>
                <Col className={"col-7 d-flex " + (props.column ? "flex-column align-items-center" : "justify-content-between")}>
                    {props.children.slice(1, -1)}

                </Col>
                <Col className='d-flex justify-content-end text-wrap'>
                    {props.children.slice(-1)}
                </Col>
            </Row>
        </Container>
    )
}

export default GridContainer