import * as React from "react";
import { section } from "./layout.module.css";

const Section = ({id, children }) => {
  return (
    <section id={id} className={`${section} bg-gradient`}>{children}</section>
  );
};

export default Section;
