import * as React from "react";
import { Container, Button, Stack, Nav } from "react-bootstrap";
import Section from "./section";
import SideBar from './sidebar';
import { sidebar, scrollspy, mainView } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Stack direction="horizontal">
      <SideBar>

      </SideBar>

      <Container
        fluid
        id={mainView}
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        tabIndex="0"
        className="p-2 bg-dark bg-gradient text-white text-center"
      >
          <Section id="about">section1</Section>
          <Section id="skills">section2</Section>
          <Section id="experience">section3</Section>
          <Section id="education">section4</Section>
          <Section id="interests">section5</Section>
      </Container>
    </Stack>
  );
};

export default Layout;
