import * as React from "react";

import SideBar from './sidebar';
import MainView from './main-view';
import CustomNavbar from './custom-navbar';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
    <CustomNavbar/>
    <div className="hstack">
      <SideBar/>
      <MainView/>
    </div>
    </>
  );
};

export default Layout;
