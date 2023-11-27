import * as React from "react";
import { Nav, Image } from "react-bootstrap";
import profilePicture from "../images/profile-picture.png";
import { sidebar } from "./layout.module.css";

const size = "160vh";

const SideBar = () => {
  const switchSection = (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const href = currentTarget.getAttribute("href");
    const target = document.querySelector(`section${href}`);
    target.scrollIntoView({behavior: 'smooth', });
  };

  return (
    <div id={sidebar} className="flex-fill sticky-top">
      <div className="">
        <Image width={size} height={size} className="img-fluid border border-danger border-5" src={profilePicture} roundedCircle />
      </div>
      <Nav id="navbar" className="p-2 flex-column list-group text-uppercase">
        <Nav.Link onClick={switchSection} href="#about">About</Nav.Link>
        <Nav.Link onClick={switchSection} href="#skills">Skills</Nav.Link>
        <Nav.Link onClick={switchSection} href="#experience">Experience</Nav.Link>
        <Nav.Link onClick={switchSection} href="#education">Education</Nav.Link>
        <Nav.Link onClick={switchSection} href="#awards">Awards</Nav.Link>
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
