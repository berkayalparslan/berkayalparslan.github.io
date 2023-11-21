import * as React from "react";
import "react-bootstrap";
import DateListItem from "./date-list-item";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at sollicitudin urna. Aliquam erat volutpat. Aliquam quis sollicitudin sem. Vestibulum dictum, augue rhoncus elementum commodo, lacus neque consectetur augue, ac efficitur metus justo sed ex. Maecenas dignissim nisi sit amet ex commodo eleifend. Aliquam ultricies iaculis dolor. Sed porta volutpat viverra. Proin ut nisl finibus mauris efficitur malesuada quis vitae tellus. Cras ac eleifend elit.";

const Education = () => {
  return (
    <>
      <DateListItem
        title="Politechnika Lubelska"
        subtitle="Computer Science"
        description={loremIpsum}
        time="October 2018 - January 2021"
        place="Lublin"
      />
    </>
  );
};

export default Education;
