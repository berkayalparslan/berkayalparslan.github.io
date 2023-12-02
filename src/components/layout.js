import React, { createContext, useState } from "react";
import SideBar from "./sidebar";
import MainView from "./main-view";
import CustomNavbar from "./custom-navbar";

export const SectionContext = createContext("test");

const Layout = ({ pageTitle, children }) => {
  const [currentSection, setCurrentSection] = useState("Berkay Alparslan");
  return (
    <SectionContext.Provider value={[currentSection, setCurrentSection]}>
      <CustomNavbar />
      <div className="hstack">
        <SideBar />
        <MainView />
      </div>
    </SectionContext.Provider>
  );
};

export default Layout;
