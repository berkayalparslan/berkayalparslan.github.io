import * as React from "react";
import { Nav, Image } from "react-bootstrap";
import profilePicture from "../images/profile-picture.png";
import { sidebar } from "./layout.module.css";

const SideBar = () => {
  return (
    <div id={sidebar} className="flex-fill sticky-top">
      <div className="">
        <Image className="img-fluid" src={profilePicture} roundedCircle />
      </div>
      <Nav id="navbar" className="p-2 flex-column bg-danger list-group">
        <Nav.Link
          className="text-warning list-group-item list-group-item-action"
          href="#about"
        >
          About
        </Nav.Link>
        <Nav.Link
          className="text-warning list-group-item list-group-item-action"
          href="#skills"
        >
          Skills
        </Nav.Link>
        <Nav.Link
          className="text-warning list-group-item list-group-item-action"
          href="#experience"
        >
          Experience
        </Nav.Link>
        <Nav.Link
          className="text-warning list-group-item list-group-item-action"
          href="#education"
        >
          Education
        </Nav.Link>
        <Nav.Link
          className="text-warning list-group-item list-group-item-action"
          href="#interests"
        >
          Interests
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBar;
