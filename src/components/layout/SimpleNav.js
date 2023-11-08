import React from 'react'
import { Col, Container, Form, InputGroup, Stack, Nav, Row, Button } from 'react-bootstrap'


const SimpleNav = (props) => {
    return (
        <Nav>
            {
                props.items.map((item) => (
                    <Nav.Link href={item.href} className='link-bluegray800 link-underline-opacity-0 link-opacity-50-hover'>
                        {item.title}
                    </Nav.Link>
                ))
            }
        </Nav>
    )
}

export default SimpleNav