"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import education from "@/assets/Resume/education.svg";
import workHistory from "@/assets/Resume/work-history.svg";
import programmingSkills from "@/assets/Resume/programming-skills.svg";
import abilities from "@/assets/Resume/abilities.svg";
import interests from "@/assets/Resume/interests.svg";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";
import ResumeHeading from "./ResumeHeading/ResumeHeading";

import classes from "./Resume.module.css";

const svgList: any = {
  "education.svg": education,
  "work-history.svg": workHistory,
  "programming-skills.svg": programmingSkills,
  "abilities.svg": abilities,
  "interests.svg": interests,
};

const Resume = (props: { id: string; screenName?: string }) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<{
    style?: React.CSSProperties;
  }>({});

  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Abilities", logoSrc: "abilities.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "TypeScript", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Core Java", ratingPercentage: 65 },
    { skill: "MySQL", ratingPercentage: 65 },
    { skill: "Angular JS", ratingPercentage: 60 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "Android(Java)", ratingPercentage: 40 },
    { skill: "Core Python", ratingPercentage: 40 },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className={classes["resume-screen-container"]} key="education">
      <div>
        <ResumeHeading
          heading={"UTYCC - University of Technology (Yatanarpon Cyber City)"}
          subHeading={
            "BACHELOR OF ENGINEERING IN INFORMATION SCIENCE AND TECHNOLOGY"
          }
          fromDate={"2013"}
          toDate={"2019"}
        />
        <div className={classes["course-highlight-container"]}>
          <span className={classes["course-highlight-title"]}>
            Course Highlights:
          </span>
          <div className={classes["course-highlights"]}>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Object-Oriented Design with UML
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Data Mining & Big Data Analysis
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Database Management System
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Introduction to IoT
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Distributed System & Cloud Computing
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Software Engineering
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Mobile development with java and android studio
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Artificial Intelligence
              </span>
            </div>
            <div className={classes["course-highlight"]}>
              <span className="black-bullet"></span>
              <span className={classes["course-highlight-text"]}>
                Business Strategy & IT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    /* WORK EXPERIENCE */
    <div className={classes["resume-screen-container"]} key="work-experience">
      <div className={classes["experience-container"]}>
        <ResumeHeading
          heading={"Aceplus Co., Ltd"}
          subHeading={"JavaScript Full-stack Developer"}
          fromDate={"2020"}
          toDate={"2022"}
        />
        <div className={classes["experience-description"]}>
          <span className={classes["resume-description-text"]}>
            - Developed Mobile Applications using React Native
          </span>
          <br />
          <span className={classes["resume-description-text"]}>
            - Developed front-end web applications using Angular and React
          </span>
          <br />
        </div>
      </div>
      <div className={classes["experience-container"]}>
        <ResumeHeading
          heading={"Marter Solution Co., Ltd"}
          subHeading={"MERN Stack Developer"}
          fromDate={"2018"}
          toDate={"2019"}
        />
        <div className={classes["experience-description"]}>
          <span className={classes["resume-description-text"]}>
            - Developed e-commerce(trading) web apps
          </span>
          <br />
          <span className={classes["resume-description-text"]}>
            - Used React, Expressjs, MySQL and MongoDB
          </span>
          <br />
        </div>
      </div>
      <div className={classes["experience-container"]}>
        <ResumeHeading
          heading={"Orient Co., Ltd"}
          subHeading={"DEVELOPER INTERN"}
          fromDate={"2016"}
          toDate={"2016"}
        />
        <div className={classes["experience-description"]}>
          <span className={classes["resume-description-text"]}>
            - Served as a Software Tester
          </span>
          <br />
          <span className={classes["resume-description-text"]}>
            - Pair programming as java developer
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className={`${classes["resume-screen-container"]} ${classes["programming-skills-container"]}`}
      key="programming-skills"
    >
      {/* <div className={classes["programming-skills-container"]}> */}
      {programmingSkillsDetails.map((skill, index) => (
        <div className={classes["skill-parent"]} key={index}>
          <div className={classes["heading-bullet"]}></div>
          <span>{skill.skill}</span>
          <div className={classes["skill-percentage"]}>
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className={classes["active-percentage-bar"]}
            ></div>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>,

    /* ABILITIES */
    <div className={classes["resume-screen-container"]} key="abilities">
      <ResumeHeading heading={"Abilities"} />
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Collaboration, self-motivation and self-study.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Intermediate level in English speaking, listening, reading and
          writing.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on various Operating Systems( Linux, Windows,
          IOS and Android).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on using Git, Github and Gitlab.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on Databases, REST API and Web development.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on DevOps field( Bash Scripting,
          Configuration Management (Ansible), CI/CD, Container Technology
          (Docker), Kubernetes, Infrastructure Automation with terraform).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on Cloud Computing Services( mostly AWS ).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          A little experience and knowledge on Machine Learning (saving,
          restoring and exporting models) using Python and Tensorflow framework.
        </span>
      </div>
    </div>,

    /* Interests */
    <div className={classes["resume-screen-container"]} key="interests">
      <ResumeHeading
        heading="Playing football"
        description="Since in my childhood, my most favorite game is playing football. I got injury( broken my right leg ) when I was 13 years old. So, I took a little rest from playing football. When I recovered, I replayed football. But unfortunately, my left leg was also broken when I was 17 years old. After that, I can't no more well play football. But I am sill playing as much as I can even I am not good at now."
      />
      <ResumeHeading
        heading="Music"
        description="I played guitar about 9 years ago. Especially, I like modern rock music and acoustic music type. And I play guitar and sing as the best stress reliever."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index: number) => {
    let offsetHeight = 500;

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
            src={svgList[bullet.logoSrc]}
            alt="oops,,, no internet connection"
          />
          <span className={classes["bullet-label"]}>{bullet.label}</span>
        </div>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle?.style}
        className={classes["resume-details-carousal"]}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className={`${classes["resume-container"]} ${classes["screen-container"]} fade-in`}
      id={props.id || ""}
    >
      <div className={classes["resume-content"]}>
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className={classes["resume-card"]}>
          <div className={classes["resume-bullets"]}>
            <div className={classes["bullet-container"]}>
              <div className={classes["bullet-icons"]}></div>
              <div className={classes["bullets"]}>{getBullets()}</div>
            </div>
          </div>

          <div className={classes["resume-bullet-details"]}>
            {getResumeScreens()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
