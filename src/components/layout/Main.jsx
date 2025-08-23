import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="pt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
