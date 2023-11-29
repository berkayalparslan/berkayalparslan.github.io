import * as React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AwardCard from "./award-card";

const awards = [
  {
    type: "Certification",
    title: "ISTQB Certified Tester Foundation Level",
    date: "April 2022",
    text: "Issued by GASQ",
    link: "http://scr.istqb.org/?name=&number=87591&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=&resultsPerPage=10"
  },
  {
    type: "Certification",
    title: "ISTQB Certified Tester Foundation Level - Agile Tester",
    date: "November 2022",
    text: "Issued by GASQ",
    link: "http://scr.istqb.org/?name=&number=926478&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=&resultsPerPage=10"
  },
  {
    type: "Course",
    title: "Networking Basics",
    date: "February 2023",
    text: "Issued by Cisco",
    link: "https://www.credly.com/badges/a5b7272b-7dba-4e84-9b4a-d143085aeca2e",
  },
  {
    type: "Course",
    title: "Networking Devices and Initial Configuration",
    date: "March 2023",
    text: "Issued by Cisco",
    link: "https://www.credly.com/badges/7120a4c1-16e3-4c47-8508-05dc9837d23f",
  },
];
let columnCount = 0;

const Awards = () => {
  return (
    <>
      <Container>
        <div className="row">
          {
          awards.map((item, key) => {
            columnCount++;
            return(
            <React.Fragment key={key}>
            <div className="col-lg-6 mb-3">
              <AwardCard
                
                header={item.type}
                title={item.title}
                footer={item.date}
                text={item.text}
                link={item.link}
              />
            </div>
            {columnCount % 2 === 0 && <div className="w-100"></div>}
            
            </React.Fragment>
          )})}
        </div>
      </Container>
    </>
  );
};

export default Awards;
