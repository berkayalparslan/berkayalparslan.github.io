import * as React from "react";
import { section } from "./layout.module.css";

const Section = ({ children }) => {
  return (
    <section className={`${section} bg-gradient`}>{children}</section>
  );
};

export default Section;
