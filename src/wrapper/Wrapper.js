import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = ({ children }) => (
  <>
    <body className="h-screen bg-gray-100 m-0 p-0 box-border relative">
      {children}
    </body>
  </>
);

export default Wrapper;
