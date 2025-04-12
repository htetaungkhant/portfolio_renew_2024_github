import React from "react";

import AnimatedSection from "@/components/Common/AnimatedSection";
import SectionHeading from "@/components/Common/SectionHeading";
import { abilitiesDetails, educationDetails, interestsDetails, skillsDetails, workHistoryDetails } from "@/data/Resume/constants";

import ResumeActions from "./ResumeActions";
import ResumeHeading from "./ResumeHeading";
import classes from "./index.module.scss";

const Resume = (props: { id: string; sectionName?: string }) => {
  const educationDetailsComponent = (
    <div className={classes["resume-screen-container"]}>
      {educationDetails.map((details, index) => (
        <div key={`education-${index}`}>
          <ResumeHeading
            heading={details.heading}
            subHeading={details.subHeading}
            fromDate={details.fromDate}
            toDate={details.toDate}
          />
          <div className={classes["course-highlight-container"]}>
            <span className={classes["course-highlight-title"]}>
              {details.courseHighlights.title}
            </span>
            <div className={classes["course-highlights"]}>
              {details.courseHighlights.highlights.map((highlight, index) => (
                <div className={classes["course-highlight"]} key={index}>
                  <span className="black-bullet"></span>
                  <span className={classes["course-highlight-text"]}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const workHistoryDetailsComponent = (
    <div className={classes["resume-screen-container"]}>
      {workHistoryDetails.map((details, index) => (
        <React.Fragment key={`work-experience-${index}`}>
          <div className={classes["experience-container"]}>
            <ResumeHeading
              heading={details.heading}
              subHeading={details.subHeading}
              fromDate={details.fromDate}
              toDate={details.toDate}
            />
            <div className={classes["experience-description"]}>
              {details.details.map((detail, index) => (
                <span className={classes["resume-description-text"]} key={index}>
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );

  const skillsDetailsComponent = (
    <div className={`${classes["resume-screen-container"]} ${classes["programming-skills-container"]}`}>
      <div className={classes["proficient-skills"]}>
        <span className={classes["skills-title"]}>{skillsDetails.proficientSkills.title}</span>
        <div className={classes["proficient-skills-box"]}>
          {skillsDetails.proficientSkills.skills.map((skill, index) => (
            <div className={classes["skill-parent"]} key={`proficient-skills-${index}`}>
              <div className={classes["skill-name"]}>
                <span>{skill.skill}</span>
                <span>{skill.ratingPercentage}%</span>
              </div>
              <div className={classes["skill-percentage"]}>
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className={classes["active-percentage-bar"]}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["familiar-skills"]}>
        <span className={classes["skills-title"]}>{skillsDetails.familiarSkills.title}</span>
        <div className={classes["familiar-skills-box"]}>
          {skillsDetails.familiarSkills.skills.map((skill, index) => (
            <div className={classes["skill-parent"]} key={`familiar-skills-${index}`}>
              <div className={classes["skill-name"]}>
                <span>{skill.skill}</span>
                <span>{skill.ratingPercentage}%</span>
              </div>
              <div className={classes["skill-percentage"]}>
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className={classes["active-percentage-bar"]}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const abilitiesDetailsComponent = (
    <div className={classes["resume-screen-container"]}>
      <ResumeHeading heading={abilitiesDetails.title} />
      {abilitiesDetails.abilities.map((ability, index) => (
        <div className={classes["ability-description"]} key={`ability-${index}`}>
          <span className="black-bullet"></span>
          <span className={classes["ability-description-text"]}>
            <span dangerouslySetInnerHTML={{ __html: ability }}></span>
          </span>
        </div>
      ))}
    </div>
  );

  const interestsDetailsComponent = (
    <div className={classes["resume-screen-container"]} key="interests">
      {interestsDetails.map((interest, index) => (
        <ResumeHeading
          key={`interest-${index}`}
          heading={interest.heading}
          description={interest.description}
        />
      ))}
    </div>
  );

  return (
    <AnimatedSection
      className={`${classes["resume-container"]} ${classes["screen-container"]}`}
      id={props.id || ""}
    >
      <div className={classes["resume-content"]}>
        <SectionHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <ResumeActions>
          {educationDetailsComponent}
          {workHistoryDetailsComponent}
          {skillsDetailsComponent}
          {abilitiesDetailsComponent}
          {interestsDetailsComponent}
        </ResumeActions>
      </div>
    </AnimatedSection>
  );
};

export default Resume;
