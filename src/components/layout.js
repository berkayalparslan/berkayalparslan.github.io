import * as React from "react";
import { Container, Button, Stack, Nav } from "react-bootstrap";
import Section from "./section";
import { sidebar } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Stack direction="horizontal">
      <div id={sidebar} className="flex-fill sticky-top">
        <Nav className="p-2 flex-column bg-danger">
          <Nav.Link className="text-warning" id="about">
            About
          </Nav.Link>
          <Nav.Link className="text-warning" id="skills">
            Skills
          </Nav.Link>
          <Nav.Link className="text-warning" id="experience">
            Experience
          </Nav.Link>
          <Nav.Link className="text-warning" id="education">
            Education
          </Nav.Link>
          <Nav.Link className="text-warning" id="interests">
            Interests
          </Nav.Link>
        </Nav>
      </div>

      <Container
        fluid
        id="main-view"
        className="p-2 bg-dark bg-gradient text-white text-center overflow-auto"
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
