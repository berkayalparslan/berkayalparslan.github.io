import * as React from "react";
import "react-bootstrap";
import { dateListItem } from "./layout.module.css";

const DateListItem = ({ title, subtitle, description, time, place }) => {
  return (
    <div className={`container ${dateListItem}`}>
      <div className="w-75">
        <h3 className="text-uppercase text-secondary mb-2 font-weight-bolder">
          {title}
        </h3>
        <h5 className="text-uppercase text-dark mb-4 font-weight-bold">
          {subtitle}
        </h5>
        <div className="d-lg-none">
          <p className="text-info mb-0 text-nowrap">{time}</p>
          <p className="text-secondary font-italic">{place}</p>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="w-25 d-none d-lg-inline">
        <p className="text-info">{time}</p>
        <p className="text-secondary font-italic">{place}</p>
      </div>
    </div>
  );
};

export default DateListItem;
