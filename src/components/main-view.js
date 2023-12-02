import React, { useEffect, useRef, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import Section from "./section";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Awards from "./awards";
import { SectionContext } from "./layout";
import { mainView } from "./layout.module.css";

const scrollOffset = 5;

const MainView = () => {
  const [currentSection, setCurrentSection] = useContext(SectionContext);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let y = 0;
    for(let i=0; i < sections.length; i++){
      const section = sections[i];
      const rect = section.getBoundingClientRect();

      if(rect.y + rect.height - scrollOffset > 0){
        const sectionTitle = section.querySelector('h1');
        setCurrentSection(sectionTitle.innerText);
        break;
      }
      y += rect.height;
    }
  };

  return (
    <Container id={mainView} onScroll={handleScroll}>
      <Section key="0" id="about" title={"Berkay Alparslan"}>
        <About />
      </Section>
      <Section key="1" id="skills" title={"Skills"}>
        <Skills />
      </Section>
      <Section key="2" id="experience" title={"Experience"}>
        <Experience />
      </Section>
      <Section key="3" id="education" title={"Education"}>
        <Education />
      </Section>
      <Section key="4" id="awards" title={"Awards"}>
        <Awards />
      </Section>
    </Container>
  );
};

export default MainView;
