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
      <Nav id="navbar" className="p-2 flex-column list-group">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#awards">Awards</Nav.Link>
      </Nav>
      <div>
        <p>
          Icons by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </p>
        <p>
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
