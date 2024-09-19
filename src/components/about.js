/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <StaticImage
          className="about-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="https://avatars.githubusercontent.com/u/15653983?v=4"
          width={250}
          height={250}
          // quality={100}
          alt="Profile picture"
        />
        <div>
          <h1>QA Engineer</h1>
          <h3>Playwright&Typescript</h3>
          <a href="https://www.linkedin.com/in/berkay-a-319262111/">
            Linkedin
          </a>{" "}
          | <a href="https://github.com/berkayalparslan">Github</a> |{" "}
          <a href="mailto:berkayalparslan.contact@gmail.com">Email</a>
        </div>
      </div>
      <div className="content-section">
        <h2>My services</h2>
        <ul>
          <li>
            I can start creating an automation test framework from zero for your
            application, using any technology of your choice.
          </li>
          <li>
            I can maintain already existing automation tests for your
            application.
          </li>
          <li>
            I can optimize your tests, reduce the execution time, saving both money and time.
          </li>
          <li>I can create custom tools based on your needs.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>My experience</h2>
        <ul>
          <li><b>NDA Projects</b>
            <ul>
              <li>Automation tests written in Playwright, Typescript and Cucumber.</li>
              <li>Performed API tests using Postman.</li>
              <li>Performed basic security tests for web applications.</li>
            </ul>
             </li>
          <li>
            <b>
              Gloria Victis: Medieval MMORPG - full-time QA Specialist</b>
            <ul>
              <li>Implemented a testing process from zero.</li>
              <li>Lead QA team consisting of both technical and non-technical people.</li>
              <li>Improved application quality efficiently by applying white-box techniques.</li>
              <li>Debugged code, fixed low and medium priority issues.</li>
              <li>Improved application performance by finding performance issues using built-in profiler.</li>
              <li>Developed a report processing tool, allowing QA team to process more player reports on daily basis.</li>
            </ul>
          </li>
          <li><b>Siege Survival: Gloria Victis - full-time QA Specialist</b>
            <ul>
              <li>Performed tests for AI, load and save system.</li>
              <li>Debugged code, fixed low and medium priority issues.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content-section">
        <h2>About me</h2>
        <p>
          I specialize in web applications and test automation, primarily using
          Playwright with Typescript.
          <br />
          <br />
          I'm deeply engaged in the technical aspects of software development
          and am committed to further specializing in this dynamic field.
          <br />
          <br />
          Outside of work, I usually cycle. I'm passionate about technology and
          science, and I actively follow open-source world.
          <br />
          And yes, I love cats!
        </p>
      </div>
    </div>
  )
}

export default About
