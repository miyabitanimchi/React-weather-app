import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = ({ children }) => (
  <>
    <Header />
    <main className="h-screen">{children}</main>
    <Footer />
  </>
);

export default Wrapper;
