"use client";

import { RESUME_LINK } from "@/data/Common/constants";
import { scrollToSection } from "@/lib/utils";

import classes from "./index.module.scss";

export default function AboutMeActions() {
  return (
    <div className={classes["about-me-options"]}>
      <button
        className={`btn primary-btn ${classes["primary-btn"]}`}
        onClick={() => scrollToSection("contact-me")}
      >
        Hire Me
      </button>
      <button
        onClick={() => window.open(RESUME_LINK, "_blank")}
        className={`btn highlighted-btn ${classes["highlighted-btn"]}`}
      >
        Get Resume
      </button>
    </div>
  );
}
