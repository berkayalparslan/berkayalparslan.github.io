import * as React from "react";
import "react-bootstrap";
import { contactLink } from "./layout.module.css";

const ContactLink = ({iconSrc, iconName, href}) => {
  return (
    <a
      href={href}
      className={`btn btn-lg btn-link ${contactLink}`}
      role="button"
    >
      <img src={iconSrc} alt={iconName}/>
    </a>
  );
};

export default ContactLink;
