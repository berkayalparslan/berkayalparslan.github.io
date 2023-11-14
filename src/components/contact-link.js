import * as React from "react";
import "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { contactLink } from "./layout.module.css";

const ContactLink = ({icon}) => {
    const classes = `bi ${icon}`;
  return (
    <a
      href=""
      className={`btn btn-lg btn-outline-secondary rounded-circle ${contactLink}`}
      role="button"
    >
      <i className={classes}></i>
    </a>
  );
};

export default ContactLink;
