import * as React from "react";
import "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { contactLink } from "./layout.module.css";

const ContactLink = ({iconSrc, iconName}) => {
  return (
    <a
      href=""
      className={`btn btn-lg btn-link ${contactLink}`}
      role="button"
    >
      <img src={iconSrc} alt={iconName}/>
    </a>
  );
};

export default ContactLink;
