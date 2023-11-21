import * as React from "react";
import { section, sectionTitle, sectionBody } from "./layout.module.css";

const Section = ({id, title, children }) => {
  return (
    <section id={id} className={`${section} bg-gradient`}>
      <h1 className={`text-uppercase text-left ${sectionTitle}`}>{title}</h1>
      <div className={sectionBody}>
      {children}
      </div>
      </section>
  );
};

export default Section;
