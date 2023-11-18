import * as React from "react";
import {Stack} from "react-bootstrap";

import SideBar from './sidebar';
import MainView from './main-view';

const Layout = ({ pageTitle, children }) => {
  return (
    <Stack direction="horizontal">
      <SideBar/>
      <MainView/>
    </Stack>
  );
};

export default Layout;
