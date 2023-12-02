import React, {useContext} from 'react';
import { SectionContext } from './layout';
import { Navbar, Nav, Container } from "react-bootstrap";
import { navColor} from './layout.module.css';

const CustomNavbar = () => {
  const [currentSection, setCurrentSection] = useContext(SectionContext);
    const switchSection = (e) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const href = currentTarget.getAttribute("href");
        const target = document.querySelector(`section${href}`);
        target.scrollIntoView({ behavior: "smooth" });
        setCurrentSection(currentTarget.innerText);
      };
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={`d-lg-none ${navColor}`}>
      <Container fluid>
        <Navbar.Brand id="navbar-section">{currentSection}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" color="yellow"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={switchSection} href="#about">
          About
        </Nav.Link>
        <Nav.Link onClick={switchSection} href="#skills">
          Skills
        </Nav.Link>
        <Nav.Link onClick={switchSection} href="#experience">
          Experience
        </Nav.Link>
        <Nav.Link onClick={switchSection} href="#education">
          Education
        </Nav.Link>
        <Nav.Link onClick={switchSection} href="#awards">
          Awards
        </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
