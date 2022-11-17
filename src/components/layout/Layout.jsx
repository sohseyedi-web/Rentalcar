import React from "react";
import Footer from "./Footer/Footer";
import Container from "./../../container/Container";
import Services from "./Servicess/Services";
import Products from "./Products/Products";
import About from "./About/About";
import Helmet from "react-helmet";
import Intro from "./Intro/Intro";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      <Container>
        <Intro />
        <Services />
        <Products />
        <About />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
