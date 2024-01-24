import * as React from "react";
import LabeledIconListItem from "./labeled-icon-list-item";
import expertLevelIcon from "./../images/icons/icons8-ok-green-48.png";
import regularLevelIcon from "./../images/icons/icons8-ok-blue-48.png";
import learningLevelIcon from "./../images/icons/icons8-circle-48.png";

const skills = [
    {
      name: "Software Testing",
      experienceLevel: 3,
    },
    {
      name: "Automation Testing",
      experienceLevel: 3,
    },
    {
      name: "Manual Testing",
      experienceLevel: 3,
    },
    {
      name: "API Tests",
      experienceLevel: 2,
    },
    {
      name: "Performance Tests",
      experienceLevel: 1,
    },
    {
      name: "Web Applications",
      experienceLevel: 3,
    },
    {
      name: "Desktop Applications",
      experienceLevel: 2,
    },
  ];

  //level 3 expert, level 2 regular, level 1 learning
  function getIconByExperienceLevel(experienceLevel) {
    switch (experienceLevel) {
      case 3:
        return expertLevelIcon;
      case 2:
        return regularLevelIcon;
      case 1:
        return learningLevelIcon;
      default:
        throw new Error("experience level out of range");
    }
  }

const SkillsList = () => {

  skills.sort((a, b) => a.experienceLevel < b.experienceLevel);
  return (
    <ul>
    {skills.map((item, index) => {
      return (
        <LabeledIconListItem
          key={index}
          iconSrc={getIconByExperienceLevel(item.experienceLevel)}
          text={item.name}
        />
      );
    })}
  </ul>
  );
};

export default SkillsList;
