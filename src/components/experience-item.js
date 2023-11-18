import * as React from "react";
import "react-bootstrap";
import { experienceItem } from "./layout.module.css";

const ExperienceItem = ({ title, company, description, time }) => {
  return (
    <div className={experienceItem}>
      <div className="w-75">
        <h3 className="text-uppercase text-secondary mb-2 font-weight-bolder">{title}</h3>
        <h5 className="text-uppercase text-dark mb-4 font-weight-bold">{company}</h5>
        <p>{description}</p>
      </div>
      <div className="w-25">
        <p className="text-info">{time}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
