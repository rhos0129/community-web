import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router';


const SimpleNav = ({ items }) => {

  const location = useLocation();

  return (
    <Nav activeKey={location.pathname}>
      {
        items.map((item, key) => (
          <Nav.Link href={item.href} key={key}>
            {item.title}
          </Nav.Link>
        ))
      }
    </Nav>
  )
}

SimpleNav.defaultProps = {
  items: [
    {
      title: 'null',
      href: 'null',
    },
  ],
};


export default SimpleNav