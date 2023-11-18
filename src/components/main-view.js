import * as React from "react";
import { Container } from "react-bootstrap";
import Section from "./section";
import About from "./about";
import Skills from "./skills";
import Experience from './experience';
import Education from './education';
import Awards from "./awards";

import { mainView } from "./layout.module.css";

const MainView = () => {
  return (
    <Container
        
        id={mainView}
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        tabIndex="0"
        className="p-0 text-center"
      >
          <Section id="about">
            <About/>
          </Section>
          <Section id="skills">
            <Skills/>
          </Section>
          <Section id="experience">
            <Experience/>
          </Section>
          <Section id="education">
            <Education/>
          </Section>
          <Section id="awards">
            <Awards/>
          </Section>
      </Container>
  );
};

export default MainView;
