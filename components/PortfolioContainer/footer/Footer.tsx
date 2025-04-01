"use client";

import ScrollService from "@/lib/ScrollService";

import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes["scroll-container"]}>
      <button
        className={classes["btn-scroll"]}
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
