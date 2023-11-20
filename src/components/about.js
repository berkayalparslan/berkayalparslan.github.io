import * as React from "react";
import "react-bootstrap";
import { aboutContent, sectionContent } from "./layout.module.css";
import linkedinIcon from '../images/icons/icons8-linkedin-48.png';
import githubIcon from '../images/icons/icons8-github-48.png';
import ContactLink from "./contact-link";


/**
 * I'm an ISTQB certified QA Specialist with a focus on delivering high-quality products.
Experienced in multidisciplinary, international Scrum teams, I've primarily worked with
web applications, supporting developers, analysts, architects, and testers. I'm eager to
contribute my expertise in both manual and automated testing to innovative projects.
 */

const fullName = "BERKAY ALPARSLAN";
const title = "QA Specialist";
const description =
  "I am an experienced QA Specialist with both manual and automation test skills.";

const About = () => {
  return (
    <div id={aboutContent} className={sectionContent}>
      <h1>{fullName}</h1>
      <p className="fw-light">{title}</p>
      <p className="fw-medium">{description}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
          <ContactLink iconSrc={linkedinIcon}/>
          <ContactLink iconSrc={githubIcon}/>
      </div>
    </div>
  );
};

export default About;
