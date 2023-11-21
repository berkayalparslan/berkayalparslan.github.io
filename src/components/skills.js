import * as React from "react";
import LabeledIconListItem from "./labeled-icon-list-item";
import ImageListItem from "./image-list-item";

import playwrightIcon from "./../images/icons/playwright-logo.svg";
import cypressIcon from "./../images/icons/Cypress_Logomark_Dark-Color.png";
import javascriptIcon from "./../images/icons/icons8-javascript-48.png";
import typescriptIcon from "./../images/icons/icons8-typescript-48.png";
import csharpIcon from "./../images/icons/icons8-csharp-48.png";
import htmlIcon from "./../images/icons/icons8-html-48.png";
import cssIcon from "./../images/icons/icons8-css-48.png";
import postmanIcon from "./../images/icons/postman-logo-orange-stacked.svg";
import msSqlIcon from "./../images/icons/icons8-sql-server-48.png";
import mySqlIcon from "./../images/icons/icons8-my-sql-48.png";
import postgreSqlIcon from "./../images/icons/icons8-postgresql-48.png";
import gitIcon from "./../images/icons/icons8-git-48.png";
import virtualBoxIcon from "./../images/icons/icons8-virtualbox-48.png";
import azureIcon from "./../images/icons/icons8-azure-48.png";
import jiraIcon from "./../images/icons/icons8-jira-48.png";
import trelloIcon from "./../images/icons/icons8-trello-48.png";
import unityIcon from "./../images/icons/icons8-unity-48.png";
import linuxIcon from "./../images/icons/icons8-linux-48.png";

const Skills = () => {
  return (
    <>
      <div className="flex">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="text-secondary">Skills</h4>
              <ul>
                <LabeledIconListItem
                  iconSrc={linuxIcon}
                  text="Software Testing"
                />
                <LabeledIconListItem
                  iconSrc={linuxIcon}
                  text="Automation Tests"
                />
                <LabeledIconListItem
                  iconSrc={linuxIcon}
                  text="Manual Tests"
                />
                <LabeledIconListItem iconSrc={linuxIcon} text="API Tests" />
              </ul>
            </div>
            <div className="col">
              <h4 className="text-secondary">Tech & Tools</h4>
              <div className="container">
                <div className="row">
                  <ImageListItem
                    imgSource={playwrightIcon}
                    altText="Playwright"
                  />
                  <ImageListItem
                    imgSource={cypressIcon}
                    altText="Cypress"
                  />
                  <ImageListItem
                    imgSource={javascriptIcon}
                    altText="Javascript"
                  />
                  <ImageListItem
                    imgSource={typescriptIcon}
                    altText="Typescript"
                  />
                  <ImageListItem imgSource={csharpIcon} altText="C#" />
                  <ImageListItem imgSource={htmlIcon} altText="HTML" />
                  <ImageListItem imgSource={cssIcon} altText="CSS" />
                  <ImageListItem imgSource={postmanIcon} altText="Postman" />
                  <ImageListItem imgSource={msSqlIcon} altText="MS SQL" />
                  <ImageListItem imgSource={mySqlIcon} altText="MySql" />
                  <ImageListItem imgSource={postgreSqlIcon} altText="PostgreSQL" />
                  <ImageListItem imgSource={gitIcon} altText="GIT" />
                  <ImageListItem imgSource={virtualBoxIcon} altText="Virtualbox" />
                  <ImageListItem imgSource={azureIcon} altText="Azure" />
                  <ImageListItem imgSource={jiraIcon} altText="JIRA" />
                  <ImageListItem imgSource={trelloIcon} altText="Trello" />
                  <ImageListItem imgSource={unityIcon} altText="Unity" />
                  <ImageListItem imgSource={linuxIcon} altText="Linux" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
