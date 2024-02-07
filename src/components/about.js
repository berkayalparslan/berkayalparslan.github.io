import * as React from "react";
import "react-bootstrap";
import linkedinIcon from "../images/icons/icons8-linkedin-48.png";
import githubIcon from "../images/icons/icons8-github-48.png";
import emailIcon from "../images/icons/icons8-email-48.png";
import ContactLink from "./contact-link";

const title = "QA Specialist";
const description =
  "I am an experienced QA Specialist with both manual and automation test skills. I primarily work in multidisciplinary Scrum teams with a focus on delivering high-quality products, supporting developers, analysts, architects and the other members of the QA team.";
const contactLinks = [
  {
    iconSource: linkedinIcon,
    iconName: "Linkedin",
    link: "https://www.linkedin.com/in/%F0%9F%9A%B2berkay-a-319262111/",
  },
  {
    iconSource: githubIcon,
    iconName: "Github",
    link: "https://github.com/berkayalparslan",
  },
  {
    iconSource: emailIcon,
    iconName: "Email",
    link: "mailto:ber.alp.contact@proton.me",
  },
];

const About = () => {
  return (
    <>
      <h4 className="fw-light text-secondary">{title}</h4>
      <p className="lead">{description}</p>
      <div className="btn-group" role="group" aria-label="Contact">
        {contactLinks.map((item, index) => {
          return(
            <ContactLink
            key={index}
            iconSrc={item.iconSource}
            iconName={item.iconName}
            href={item.link}
          />
          )
        })}
      </div>
    </>
  );
};

export default About;
