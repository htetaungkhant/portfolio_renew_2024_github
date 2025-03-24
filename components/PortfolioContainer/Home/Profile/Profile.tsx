"use client";

import React from "react";
import { ReactTyped } from "react-typed";

import ScrollService from "@/lib/ScrollService";

import classes from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={classes["profile-container"]}>
      <div className={classes["profile-parent"]}>
        <div className={classes["profile-details"]}>
          <div className={classes["colz"]}>
            <div className={classes["colz-icon"]}>
              <a
                href="https://www.facebook.com/htetaungkhant1997/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-square" />
              </a>
              <a
                href="https://www.linkedin.com/in/htet-khant-9003b6164/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square" />
              </a>
              <a
                href="https://www.instagram.com/nga_khant_18/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCMilPRhUqbaiOj7ZBKs9Byw"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube-square" />
              </a>
              <a
                href="https://twitter.com/htetkhant2021"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className={classes["profile-details-name"]}>
            <span className={classes["primary-text"]}>
              Hello, I&apos;M&nbsp;
              <span className={classes["highlighted-text"]}>
                Htet Aung Khant
              </span>
              .
            </span>
          </div>
          <div className={classes["profile-details-role"]}>
            <span className={classes["primary-text"]}>
              <h1>
                <ReactTyped
                  strings={[
                    "Enthusiastic Dev 😎",
                    "Full stack Developer 💻",
                    "MERN stack Dev 📱",
                    "Cross Platform Dev 🔴",
                    "React/React Native 🌐",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
            </span>
            <span className={classes["profile-role-tagline"]}>
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className={classes["profile-options"]}>
            <button
              className={`btn primary-btn ${classes["primary-btn"]}`}
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="htetaungkhant_25_03_2025.pdf" download="Htet Aung Khant CV.pdf">
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
