"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import AnimatedSection from "@/components/Common/AnimatedSection/AnimatedSection";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import ResumeHeading from "./ResumeHeading/ResumeHeading";

import { resumeBullets, educationDetails, workHistoryDetails, skillsDetails, abilitiesDetails, interestsDetails } from "@/data/Resume/constants";

import classes from "./Resume.module.scss";

const Resume = (props: { id: string; sectionName?: string }) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<{
    style?: React.CSSProperties;
  }>({});

  const handleCarousal = (index: number) => {
    let offsetHeight = 560;

    let newCarousalOffset = {
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        key={index}
        onClick={() => handleCarousal(index)}
        className={classes["bullet-row-container"]}
      >
        <div
          className={
            index === selectedBulletIndex
              ? `${classes["bullet"]} ${classes["selected-bullet"]}`
              : classes["bullet"]
          }
        >
          <Image
            className={classes["bullet-logo"]}
            src={bullet.image}
            alt="bullet-logo"
          />
          <span className={classes["bullet-label"]}>{bullet.label}</span>
        </div>
      </div>
    ));
  };

  const educationDetailsComponent = (
    <div className={classes["resume-screen-container"]}>
      {
        educationDetails.map((details, index) => (
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
                {
                  details.courseHighlights.highlights.map((highlight, index) => (
                    <div className={classes["course-highlight"]} key={index}>
                      <span className="black-bullet"></span>
                      <span className={classes["course-highlight-text"]}>
                        {highlight}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );

  const workHistoryDetailsComponent = (
    <div className={classes["resume-screen-container"]}>
      {
        workHistoryDetails.map((details, index) => (
          <React.Fragment key={`work-experience-${index}`}>
            <div className={classes["experience-container"]}>
              <ResumeHeading
                heading={details.heading}
                subHeading={details.subHeading}
                fromDate={details.fromDate}
                toDate={details.toDate}
              />
              <div className={classes["experience-description"]}>
                {
                  details.details.map((detail, index) => (
                    <span className={classes["resume-description-text"]} key={index}>
                      {detail}
                    </span>
                  ))
                }
              </div>
            </div>
          </React.Fragment>
        ))
      }
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
      {
        abilitiesDetails.abilities.map((ability, index) => (
          <div className={classes["ability-description"]} key={`ability-${index}`}>
            <span className="black-bullet"></span>
            <span className={classes["ability-description-text"]}>
              <span dangerouslySetInnerHTML={{ __html: ability }}></span>
            </span>
          </div>
        ))
      }
    </div>
  );

  const interestsDetailsComponent = (
    <div className={classes["resume-screen-container"]} key="interests">
      {
        interestsDetails.map((interest, index) => (
          <ResumeHeading
            key={`interest-${index}`}
            heading={interest.heading}
            description={interest.description}
          />
        ))
      }
    </div>
  );

  return (
    <AnimatedSection
      className={`${classes["resume-container"]} ${classes["screen-container"]}`}
      id={props.id || ""}
    >
      <div className={classes["resume-content"]}>
        <SectionHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className={classes["resume-card"]}>
          <div className={classes["resume-bullets"]}>
            <div className={classes["bullet-container"]}>
              <div className={classes["bullet-icons"]}></div>
              <div className={classes["bullets"]}>{getBullets()}</div>
            </div>
          </div>

          <div className={classes["resume-bullet-details"]}>
            <div
              style={carousalOffsetStyle?.style}
              className={classes["resume-details-carousal"]}
            >
              {educationDetailsComponent}
              {workHistoryDetailsComponent}
              {skillsDetailsComponent}
              {abilitiesDetailsComponent}
              {interestsDetailsComponent}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Resume;
