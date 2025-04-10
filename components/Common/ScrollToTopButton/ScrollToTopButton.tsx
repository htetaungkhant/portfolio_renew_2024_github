"use client";

import { scrollToTop } from "@/lib/hooks/useScrollAnimation";

import classes from "./ScrollToTopButton.module.scss";

export default function ScrollToTopButton() {
  return (
    <div className={classes["scroll-container"]}>
      <button
        className={classes["btn-scroll"]}
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
