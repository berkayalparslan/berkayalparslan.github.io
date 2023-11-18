import * as React from "react";
import "react-bootstrap";
import { sectionContent } from "./layout.module.css";
import ExperienceItem from "./experience-item";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at sollicitudin urna. Aliquam erat volutpat. Aliquam quis sollicitudin sem. Vestibulum dictum, augue rhoncus elementum commodo, lacus neque consectetur augue, ac efficitur metus justo sed ex. Maecenas dignissim nisi sit amet ex commodo eleifend. Aliquam ultricies iaculis dolor. Sed porta volutpat viverra. Proin ut nisl finibus mauris efficitur malesuada quis vitae tellus. Cras ac eleifend elit.";

const Experience = () => {
  return (
    <div className={sectionContent}>
      <h1>EXPERIENCE</h1>
      <ExperienceItem
        title="QA Specialist"
        company="ASSECO POLAND"
        description={loremIpsum}
        time="January 2022 - Present"
      />
      <ExperienceItem
        title="QA Specialist"
        company="Black Eye Games"
        description={loremIpsum}
        time="July 2018 - December 2021"
      />
    </div>
  );
};

export default Experience;
