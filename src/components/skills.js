import * as React from "react";
import SkillsList from "./skills-list";
import TechToolsList from "./tech-tools-list";

const Skills = () => {
  return (
    <>
      <div className="flex">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="text-secondary">Skills</h4>
              <SkillsList/>
            </div>
            <div className="col">
              <h4 className="text-secondary">Tech & Tools</h4>
              <TechToolsList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
