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
          <h2>Need my services?</h2>
          <h3>Contact me then!</h3>
          <a href="https://www.linkedin.com/in/berkay-a-319262111/">
            Linkedin
          </a>{" "}
          | <a href="https://github.com/berkayalparslan">Github</a> |{" "}
          <a href="mailto:berkayalparslan.contact@gmail.com">Email</a>
        </div>
      </div>
      {/* <div className="content-section">
        <h2>Portfolio</h2>
        <ul>
          <li>Gloria Victis: Medieval MMORPG - full-time QA Specialist</li>
          <li>Siege Survival: Gloria Victis - full-time QA Specialist</li>
        </ul>
      </div> */}
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
