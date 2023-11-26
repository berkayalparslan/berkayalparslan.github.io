import * as React from "react";
import "react-bootstrap";
import DateListItem from "./date-list-item";

const Education = () => {
  return (
    <>
      <DateListItem
        title="Politechnika Lubelska"
        subtitle="Computer Science"
        description="I acquired a solid foundation in key computer science principles and engineering practices. The curriculum covered a comprehensive range of subjects, including algorithms, data structures, software engineering, database management, and system architecture."
        time="October 2018 - January 2021"
        place="Lublin"
      />
    </>
  );
};

export default Education;
