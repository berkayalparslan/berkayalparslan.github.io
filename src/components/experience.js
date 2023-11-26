import * as React from "react";
import "react-bootstrap";
import DateListItem from "./date-list-item";

const experiences = [
  {
    title: "QA Specialist",
    company: "Asseco POLAND",
    description:
      "Engaging collaboratively within Scrum teams, I play a key role in multifaceted projects spanning diverse sectors, including defense, aviation, and cybersecurity. As an integral participant throughout the entire Software Development Life Cycle (SDLC), I contribute actively to requirements analysis, design, development, testing, and deployment phases. My responsibilities encompass both manual and automated testing, leveraging a versatile skill set to ensure the robustness and reliability of software solutions.",
    time: "January 2022 - Present",
    place: "Remote",
  },
  {
    title: "QA Specialist",
    company: "Black Eye Games",
    description:
      "Contributed to the development of notable titles, including Gloria Victis: Medieval MMORPG and Siege Survival: Gloria Victis. Spearheaded the implementation of a robust test development process to fortify the Scrum team's efficiency in a Kanban-based workflow. Actively involved in the entire Software Development Life Cycle (SDLC), I collaborated closely with designers, developers, and fellow QA team members to analyze specifications and requirements. My role extended to evaluating code, conducting debugging sessions, replicating reported issues, and meticulously documenting defects to enhance overall product quality.",
    time: "July 2018 - December 2021",
    place: "Lublin",
  },
];

const Experience = () => {
  return (
    <>
      {experiences.map((exp, index) => {
        return (
          <DateListItem
            title={exp.title}
            subtitle={exp.company}
            description={exp.description}
            time={exp.time}
            place={exp.place}
          />
        );
      })}
    </>
  );
};

export default Experience;
