import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Basic = (props) => {
  return (
    <>
      <Header />
      <main id='main' role='main'>
        <p>{props.children}</p>
      </main>
      <Footer />
    </>
  )
}

export default Basic