"use client";

import React, { useState, useEffect, type JSX } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HEADER_MENU, GET_SECTION_INDEX } from "@/lib/commonUtils";
import ScrollService from "@/lib/ScrollService";

import classes from "./Header.module.scss";

export default function Header() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentSection = (currentSection: any) => {
    if (!currentSection || !currentSection.sectionInView) return;

    let sectionIndex = GET_SECTION_INDEX(currentSection.sectionInView);
    if (sectionIndex < 0) return;
  };

  let currentSectionSubscription =
    ScrollService.currentSectionBroadcaster.subscribe(updateCurrentSection);

  const getHeaderOptions = () => {
    return HEADER_MENU.map((Menu, i) => (
      <div
        key={Menu.name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchSection(i, Menu.name)}
      >
        {Menu.name === "Blog" ? (
          <a
            href="https://medium.com/@chitkogyi19950"
            target="_blank"
            rel="noreferrer"
          >
            {Menu.name}
          </a>
        ) : (
          <span>{Menu.name}</span>
        )}
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index: number) => {
    let styles = `${classes["header-option"]} `;
    if (index < HEADER_MENU.length - 1)
      styles += `${classes["header-option-seperator"]} `;

    if (selectedSection === index)
      styles += `${classes["selected-header-option"]} `;

    return styles;
  };

  const switchSection = (
    index: number,
    name: string
  ) => {
    let sectionComponent = document.getElementById(name);
    if (!sectionComponent) return;

    sectionComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedSection(index);
  };

  useEffect(() => {
    return () => {
      currentSectionSubscription.unsubscribe();
    };
  }, [currentSectionSubscription]);

  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-parent"]}>
        <div
          className={classes["header-hamburger"]}
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon
            className={classes["header-hamburger-bars"]}
            icon={faBars}
          />
        </div>
        <div className={classes["header-logo"]}>
          <span>Htet Khant</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? `${classes["header-options"]} ${classes["show-hamburger-options"]}`
              : classes["header-options"]
          }
          onClick={() => setShowHeaderOptions(false)}
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
