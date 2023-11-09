import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router';


const SimpleNav = (props) => {

    const location = useLocation();

    return (
        <Nav>
            {
                props.items.map((item, key) => (
                    <Nav.Link  className={(location.pathname===item.href) ? 'active' : ''}
                        href={item.href} key={key}>
                        {item.title}
                    </Nav.Link>
                ))
            }
        </Nav>
    )
}

export default SimpleNav