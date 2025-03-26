"use client";

import React, { useEffect } from "react";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";

import classes from "./AboutMe.module.css";

export default function AboutMe(props: { id: string; screenName?: string }) {
  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
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
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className={classes["highlight"]} key={i}>
        <div className={classes["highlight-blob"]}></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    let screen = document.getElementById(props.id);
    if (!props.id || !screen) return;

    if (ScrollService.scrollHandler.isElementInView(screen, "partial")) {
      screen.style.opacity = "5";
      screen.style.transform = "translateY(1px)";
    }
  }, [props.id]);

  return (
    <div
      id={props.id || ""}
      className={`${classes["about-me-container"]} fade-in`}
    >
      <div className={classes["about-me-parent"]}>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className={classes["about-me-card"]}>
          <div className={classes["about-me-profile"]}></div>
          <div className={classes["about-me-details"]}>
            <span className={classes["about-me-description"]}>
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className={classes["about-me-highlights"]}>
              <div className={classes["highlight-heading"]}>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className={classes["about-me-options"]}>
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="htetaungkhant_27_03_2025.pdf" download="Htet Aung Khant CV.pdf">
                <button
                  className={`btn highlighted-btn ${classes["highlighted-btn"]}`}
                >
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
