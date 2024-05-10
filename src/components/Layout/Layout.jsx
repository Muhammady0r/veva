import React from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer";

const Layout = ({ profileFn, cerFn, children }) => {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Header profileFn={profileFn} openCer={cerFn} />
      {children}
      <div className={`mt-auto`}>
        <Footer cerFunc={cerFn} />
      </div>
    </div>
  );
};

export default Layout;
