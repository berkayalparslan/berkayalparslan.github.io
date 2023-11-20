import * as React from "react";
import { section } from "./layout.module.css";

const Section = ({key, id, children }) => {
  return (
    <section key={key} id={id} className={`${section} bg-gradient`}>{children}</section>
  );
};

export default Section;
