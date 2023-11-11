import React from 'react'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import GridContainer from 'components/layout/GridContainer'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main id='main' role='main'>
        <GridContainer>
          <div></div>
          {children}
          <div></div>
        </GridContainer>
      </main>
      <Footer />
    </>
  )
}

export default Layout