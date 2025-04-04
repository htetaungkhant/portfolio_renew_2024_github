"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { scrollToSection } from "@/lib/hooks/useScrollAnimation";

import { RESUME_LINK, socialLinks } from "@/data/Common/constants";
import { profileDetails } from "@/data/Home/constants";

import classes from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={classes["profile-container"]}>
      <div className={classes["profile-parent"]}>
        <div className={classes["profile-details"]}>
          <div className={classes["colz"]}>
            <div className={classes["colz-icon"]}>
              {
                socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={social.iconClassName} />
                  </a>
                ))
              }
            </div>
          </div>
          <div className={classes["profile-details-name"]}>
            <span className={classes["primary-text"]}>
              Hello, I&apos;M&nbsp;
              <span className={classes["highlighted-text"]}>
                {profileDetails.name}
              </span>
              .
            </span>
          </div>
          <div className={classes["profile-details-role"]}>
            <span className={classes["primary-text"]}>
              <h1>
                <ReactTyped
                  strings={profileDetails.titles}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
            </span>
            <span className={classes["profile-role-tagline"]}>{profileDetails.description}</span>
          </div>

          <div className={classes["profile-options"]}>
            <button
              className={`btn primary-btn ${classes["primary-btn"]}`}
              onClick={() => scrollToSection("ContactMe")}
            >
              Hire Me
            </button>
            <a href={RESUME_LINK} download="Htet Aung Khant CV.pdf">
              <button
                className={`btn highlighted-btn ${classes["highlighted-btn"]}`}
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className={classes["profile-picture"]}>
          <div className={classes["profile-picture-background"]}></div>
        </div>
      </div>
    </div>
  );
}
