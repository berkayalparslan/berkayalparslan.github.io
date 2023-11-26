import * as React from "react";
import "react-bootstrap";
import DateListItem from "./date-list-item";
import ContactLink from "./contact-link";
import websiteIcon from "../images/icons/icons8-website-48.png";

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

const projects = [
  {
    title: "berkayalparslan.github.io",
    company: "Personal Project",
    description: "Static website developed using Gatsby and React.",
    time: "2023 November",
    link: "https://github.com/berkayalparslan/berkayalparslan.github.io",
    linkText: "Github repo",
  },
  {
    title: "Gloria Victis: Medieval MMORPG",
    company: "Black Eye Games",
    description:
      "MMORPG with an emphasis on realism, set in a low-fantasy medieval open world. Made in Unity.",
    time: "July 2018 - December 2021",
    link: "https://store.steampowered.com/app/327070/Gloria_Victis_Medieval_MMORPG/",
    linkText: "Steam page",
  },
  {
    title: "Siege Survival - Gloria Victis",
    company: "Black Eye Games",
    description: "A city builder game with survival strategy and resource management mechanics. Made in Unity.",
    time: "July 2018 - May 2021",
    link: "https://store.steampowered.com/app/1167140/Siege_Survival_Gloria_Victis/",
    linkText: "Steam page",
  },
];

const Experience = () => {
  return (
    <>
      <h4 className="text-secondary">Work Experience</h4>
      {experiences.map((exp, index) => {
        return (
          <DateListItem
            key={index}
            title={exp.title}
            subtitle={exp.company}
            description={exp.description}
            time={exp.time}
            place={exp.place}
          />
        );
      })}
      <h4 className="text-secondary">Projects</h4>
      {projects.map((project, index) => {
        return (
          <DateListItem
            key={index}
            title={project.title}
            subtitle={project.company}
            description={
              <>
                <p>{project.description}</p>
                <a href={project.link}>{project.linkText}</a>
              </>
            }
            time={project.time}
          />
        );
      })}
    </>
  );
};

export default Experience;
