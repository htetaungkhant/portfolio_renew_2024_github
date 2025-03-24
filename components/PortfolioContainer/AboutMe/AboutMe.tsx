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
      "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. I have too many experiences at IT industry and I can handle various applications. Besides, I can also find and work with most efficient and effective ways to support the projects. A graduate from UTYCC intends to be a part of an organization where I can constantly learn and develop my technical and management skills. I look forward to establishing myself by adapting new technologies as well.",
    highlights: {
      heading: "Here are a Few Highlights:",
      bullets: [
        "Full Stack responsive web and mobile development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for State Management",
        "Building REST API",
        "Managing database",
        "DevOps",
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
              <a href="htetaungkhant_20_03_2025.pdf" download="Htet Aung Khant CV.pdf">
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
