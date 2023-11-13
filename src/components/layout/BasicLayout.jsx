import React from "react";
import Header from "components/layout/header/Header";
import Footer from "components/layout/footer/Footer";
import DefaultContainer from "components/layout/DefaultContainer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <DefaultContainer responsive>
          <div></div>
          {children}
          <div></div>
        </DefaultContainer>
      </main>
      <Footer />
    </>
  );
};

export default BasicLayout;
