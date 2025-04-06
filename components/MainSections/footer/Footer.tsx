"use client";

import { scrollToSection } from "@/lib/hooks/useScrollAnimation";

import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes["scroll-container"]}>
      <button
        className={classes["btn-scroll"]}
        onClick={() => scrollToSection("Home")}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
