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

import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import ResumeHeading from "./ResumeHeading/ResumeHeading";

import classes from "./Resume.module.scss";

const svgList: any = {
  "education.svg": education,
  "work-history.svg": workHistory,
  "programming-skills.svg": programmingSkills,
  "abilities.svg": abilities,
  "interests.svg": interests,
};

const Resume = (props: { id: string; sectionName?: string }) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<{
    style?: React.CSSProperties;
  }>({});

  let fadeInSectionHandler = (section: any) => {
    if (section.fadeInSection !== props.id) return;

    Animations.animations.fadeInSection(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentSectionFadeIn.subscribe(fadeInSectionHandler);

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Abilities", logoSrc: "abilities.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = {
    proficientSkills: [
      { skill: "HTML, CSS", ratingPercentage: 90 },
      { skill: "JavaScript", ratingPercentage: 90 },
      { skill: "React.js", ratingPercentage: 90 },
      { skill: "Next.js", ratingPercentage: 85 },
      { skill: "Redux, Redux Toolkit", ratingPercentage: 85 },
      { skill: "Tailwind CSS, Shadcn", ratingPercentage: 80 },
      { skill: "React Native", ratingPercentage: 80 },
      { skill: "TypeScript", ratingPercentage: 80 },
      { skill: "Express.js", ratingPercentage: 70 },
    ],
    familiarSkills: [
      { skill: "Core Java", ratingPercentage: 55 },
      { skill: "MySQL", ratingPercentage: 55 },
      { skill: "Angular.js", ratingPercentage: 50 },
      { skill: "Vue.js", ratingPercentage: 50 },
      { skill: "MongoDB", ratingPercentage: 50 },
      { skill: "Android(Java)", ratingPercentage: 30 },
      { skill: "Core Python", ratingPercentage: 30 },
      { skill: "Figma", ratingPercentage: 30 }, 
      { skill: "Adobe XD", ratingPercentage: 30 }, 
    ],
  };

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
          heading={"Partners Home Co., Ltd"}
          subHeading={"Frontend Team Leader"}
          fromDate={"2022"}
          toDate={"2024"}
        />
        <div className={classes["experience-description"]}>
          <span className={classes["resume-description-text"]}>
            - Developed the full-stack web applications
          </span>
          <br />
          <span className={classes["resume-description-text"]}>
            - Used most of JavaScript frameworks such as React.js, Next.js, Vue.js, Express.js, etc.
          </span>
          <br />
        </div>
      </div>
      <div className={classes["experience-container"]}>
        <ResumeHeading
          heading={"Aceplus Co., Ltd"}
          subHeading={"JavaScript Full-stack Developer"}
          fromDate={"2020"}
          toDate={"2022"}
        />
        <div className={classes["experience-description"]}>
          <span className={classes["resume-description-text"]}>
            - Developed Mobile Applications using React Native and front-end web applications using React.js
          </span>
          <br />
          <span className={classes["resume-description-text"]}>
            - Maintained front-end web applications using Angular.js and mobile applications
            using React Native.
          </span>
          <br />
        </div>
      </div>
      <div className={classes["experience-container"]}>
        <ResumeHeading
          heading={"Marter Solution Co., Ltd"}
          subHeading={"DEVELOPER INTERN"}
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
      <div className={classes["proficient-skills"]}>
        <span className={classes["skills-title"]}>Proficient in</span>
        <div className={classes["proficient-skills-box"]}>
          {programmingSkillsDetails.proficientSkills.map((skill, index) => (
            <div className={classes["skill-parent"]} key={index}>
              {/* <div className={classes["heading-bullet"]}></div> */}
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
        <span className={classes["skills-title"]}>Familiar with</span>
        <div className={classes["familiar-skills-box"]}>
          {programmingSkillsDetails.familiarSkills.map((skill, index) => (
            <div className={classes["skill-parent"]} key={index}>
              {/* <div className={classes["heading-bullet"]}></div> */}
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
    </div>,

    /* ABILITIES */
    <div className={classes["resume-screen-container"]} key="abilities">
      <ResumeHeading heading={"Abilities"} />
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Self-motivation, self-study, and collaboration.
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
          Knowledge on both Functional Programming and Object-Oriented Programming.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience on project management tools such as <strong>Jira, Confluence</strong> and <strong>Teamspirit</strong>.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience on modern technologies related to React.js such as <strong>Vite, NextAuth, Clerk, Stripe, Storybook, zod,
            react-hook-form, Zustand, Tanstack, React Router, Supabase</strong> and <strong>Prisma</strong>.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Familiarity with build tools such as Webpack, Babel, and Vite.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Familiarity with various JavaScript runtime environments such as Node.js, Bun, etc.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on implementing android applications.
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on various Operating Systems (Linux, Windows, IOS and Android).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on using Git, GitHub and GitLab.
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
          Experience and knowledge on DevOps field (Bash Scripting, Configuration Management (Ansible),
            CI/CI, Container Technology (Docker), Kubernetes, Infrastructure Automation with Terraform) for
            various environments (DEV, STG, UAT, PROD, etc).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          Experience and knowledge on Cloud Computing Services (AWS, Azure, GCP, DigitalOcean, Vercel, etc.
            But mostly AWS).
        </span>
      </div>
      <div className={classes["ability-description"]}>
        <span className="black-bullet"></span>
        <span className={classes["ability-description-text"]}>
          A little experience and knowledge on Machine Learning (saving, restoring and exporting models) using
            Python and TensorFlow framework.
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
            src={svgList[bullet.logoSrc]}
            alt="oops,,, no internet connection"
          />
          <span className={classes["bullet-label"]}>{bullet.label}</span>
        </div>
      </div>
    ));
  };

  const getResumeDetails = () => {
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
    <section
      className={`${classes["resume-container"]} ${classes["screen-container"]} fade-in`}
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
            {getResumeDetails()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
