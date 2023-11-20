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
        className="p-0 text-center"
      >
          <Section key="0" id="about">
            <About/>
          </Section>
          <Section key="1" id="skills">
            <Skills/>
          </Section>
          <Section key="2" id="experience">
            <Experience/>
          </Section>
          <Section key="3" id="education">
            <Education/>
          </Section>
          <Section key="4" id="awards">
            <Awards/>
          </Section>
      </Container>
  );
};

export default MainView;
