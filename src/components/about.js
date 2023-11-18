import * as React from "react";
import "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { aboutContent, sectionContent } from "./layout.module.css";
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
      <div class="btn-group" role="group" aria-label="Basic example">
          <ContactLink icon="bi-linkedin"/>
          <ContactLink icon="bi-github"/>
      </div>
    </div>
  );
};

export default About;
