import React from "react";

const Wrapper = ({ children }) => (
  <>
    <main className="h-screen bg-gray-100 m-0 p-0 box-border relative">
      {children}
    </main>
  </>
);

export default Wrapper;
