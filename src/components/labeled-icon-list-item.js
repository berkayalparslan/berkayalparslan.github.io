import * as React from "react";
import {labeledIconListItem} from './layout.module.css'

const size = "24vh";

const LabeledIconListItem = ({iconSrc, text }) => {
  return (
    <li className={`${labeledIconListItem} d-flex`}>
      <img src={iconSrc} width={size} height={size}/>
      <div>
      <span>{text}</span>
      </div>
      
    </li>
  );
};

export default LabeledIconListItem;
