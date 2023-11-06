import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Basic = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Basic