"use client";

import React from "react";
import Image from "next/image";

import { scrollToSection } from "@/lib/hooks/useScrollAnimation";
import AnimatedSection from "@/components/Common/AnimatedSection/AnimatedSection";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import meImage from "@/assets/AboutMe/me.jpg";

import classes from "./AboutMe.module.scss";

export default function AboutMe(props: { id: string; sectionName?: string }) {
  const CONSTANTS = {
    description:
      "A Frontend-Focused Full-Stack Developer with solid experience in React.js, Next.js, React Native, and TypeScript. Passionate about building scalable and user-friendly applications while continuously improving performance and maintainability. I aim to contribute my skills to impactful projects, collaborate with teams effectively, and stay updated with modern web technologies to deliver high-quality solutions.",
    highlights: {
      heading: "Here are a Few Highlights:",
      bullets: [
        "Full Stack responsive web and mobile development",
        "Strong understanding of both Functional and OOP",
        "React.js, Next.js and React Native",
        "Redux, Redux Toolkit, Zustand for State Management",
        "Proficient in Git, GitHub, and GitLab.",
        "Skilled in cloud computing services (AWS, Azure, GCP)",
        "Knowledge of DevOps, CI/CD, Docker, and Kubernetes.",
        "Project management tools like Jira, Confluence, etc.",
      ],
    },
  };

  const renderHighlight = () => {
    return CONSTANTS.highlights.bullets.map((value, i) => (
      <div className={classes["highlight"]} key={i}>
        <div className={classes["highlight-blob"]}></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <AnimatedSection id={props.id} className={`${classes["about-me-container"]}`}>
      <div className={classes["about-me-parent"]}>
        <SectionHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        
        <div className={classes["about-me-card"]}>
          <div className={classes["about-me-content"]}>
            <div className={classes["about-me-profile-section"]}>
              <div className={classes["profile-picture-container"]}>
                <Image
                  src={meImage}
                  alt="Htet Aung Khant"
                  fill
                  className={classes["profile-picture"]}
                  priority
                />
              </div>
              <div className={classes["about-me-options"]}>
                <button
                  className={`btn primary-btn ${classes["primary-btn"]}`}
                  onClick={() => scrollToSection("ContactMe")}
                >
                  Hire Me
                </button>
                <button
                  onClick={() => window.open("htetaungkhant_28_03_2025.pdf", "_blank")}
                  className={`btn highlighted-btn ${classes["highlighted-btn"]}`}
                >
                  Get Resume
                </button>
              </div>
            </div>

            <div className={classes["about-me-info"]}>
              <div className={classes["about-me-description"]}>
                <h3>Who I Am</h3>
                <p>{CONSTANTS.description}</p>
              </div>
              
              <div className={classes["about-me-highlights"]}>
                <h3>{CONSTANTS.highlights.heading}</h3>
                <div className={classes["highlights-container"]}>
                  {renderHighlight()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
