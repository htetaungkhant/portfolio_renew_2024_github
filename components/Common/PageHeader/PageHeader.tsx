"use client";

import React, { useEffect,useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { headerTitle } from "@/data/Home/constants";
import { HEADER_MENU } from "@/lib/commonUtils";
import { scrollToSection } from "@/lib/hooks/useScrollAnimation";

import classes from "./PageHeader.module.scss";

export default function PageHeader() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderOptionsClasses = (index: number) => {
    let styles = `${classes["header-option"]} `;
    if (index < HEADER_MENU.length - 1)
      styles += `${classes["header-option-seperator"]} `;

    if (selectedSection === index)
      styles += `${classes["selected-header-option"]} `;

    return styles;
  };

  const switchSection = (index: number, name: string) => {
    if (name !== "Blog") {
      scrollToSection(name);
      setSelectedSection(index);
    }
  };

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

  return (
    <section className={`${classes["header-container"]} ${hasScrolled ? classes["header-scrolled"] : ""}`}>
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
          <span>{headerTitle}</span>
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
    </section>
  );
}
