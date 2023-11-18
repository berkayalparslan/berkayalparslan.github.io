import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const LabeledIconListItem = ({ text }) => {
  return (
    <li>
      <span>{text}</span>
    </li>
  );
};

export default LabeledIconListItem;
