import React from "react";
import Image from "next/image";

import AnimatedSection from "@/components/Common/AnimatedSection";
import SectionHeading from "@/components/Common/SectionHeading";
import { CONSTANTS } from "@/data/AboutMe/constants";
import meImage from "@/data/AboutMe/images/me.jpg";

import AboutMeActions from "./AboutMeActions";
import classes from "./index.module.scss";

export default function AboutMe(props: { id: string; sectionName?: string }) {
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
              <AboutMeActions />
            </div>

            <div className={classes["about-me-info"]}>
              <div className={classes["about-me-description"]}>
                <h3>{CONSTANTS.introduction.title}</h3>
                <p>{CONSTANTS.introduction.description}</p>
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
