import React from 'react'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import GridContainer from 'components/layout/GridContainer'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main id='main' role='main'>
        <GridContainer>
          <div>left</div>
          {props.children}
          <div>right</div>
        </GridContainer>
      </main>
      <Footer />
    </>
  )
}

export default Layout