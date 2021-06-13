import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = ({ children }) => (
  <>
    <main className="h-screen bg-gray-100 m-0 p-0 box-border relative">
      {children}
    </main>
  </>
);

export default Wrapper;
