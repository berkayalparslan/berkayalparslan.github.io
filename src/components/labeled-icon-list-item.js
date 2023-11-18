import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const LabeledIconListItem = ({ icon, text }) => {
  return (
    <li>
      <i className={`bi bi-${icon}`}></i>
      <span>{text}</span>
    </li>
  );
};

export default LabeledIconListItem;
