"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";
import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";
import meImage from "@/assets/AboutMe/me.jpg";

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
    <div id={props.id || ""} className={`${classes["about-me-container"]} fade-in`}>
      <div className={classes["about-me-parent"]}>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        
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
                  onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >
                  Hire Me
                </button>
                <button
                  onClick={() => window.open("htetaungkhant_28_03_2025.pdf", "_blank")}
                  className={`btn highlighted-btn ${classes["highlighted-btn"]}`}
                >
                  {/* <a href="htetaungkhant_28_03_2025.pdf" download="Htet Aung Khant CV.pdf"> */}
                      Get Resume
                  {/* </a> */}
                </button>
              </div>
            </div>

            <div className={classes["about-me-info"]}>
              <div className={classes["about-me-description"]}>
                <h3>Who I Am</h3>
                <p>{SCREEN_CONSTSANTS.description}</p>
              </div>
              
              <div className={classes["about-me-highlights"]}>
                <h3>{SCREEN_CONSTSANTS.highlights.heading}</h3>
                <div className={classes["highlights-container"]}>
                  {renderHighlight()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
