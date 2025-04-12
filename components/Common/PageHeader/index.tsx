"use client";

import React, { useEffect,useState } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ScrollLink from "@/components/Common/ScrollLink";
import { headerTitle } from "@/data/Home/constants";
import { HEADER_MENU } from "@/lib/commonUtils";

import classes from "./index.module.scss";

export default function PageHeader() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      setHasScrolled(windowWidth > 1023.95 ? scrollPosition > 6 : scrollPosition > 60);
    };

    handleScroll();
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
      document.body.style.overflow = "unset";
      setSelectedSection(index);
    }
  };

  const getHeaderOptions = () => {
    return HEADER_MENU.map((Menu, i) => (
      <div
        key={Menu.name}
        className={getHeaderOptionsClasses(i)}
      >
          <ScrollLink
            href={Menu.link}
            onClick={() => switchSection(i, Menu.name)}
            target={Menu.name === "Blog" ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {Menu.name}
          </ScrollLink>
      </div>
    ));
  };

  const toggleHamburger = () => {
    const newShowHeaderOptions = !showHeaderOptions;
    setShowHeaderOptions(newShowHeaderOptions);
    document.body.style.overflow = newShowHeaderOptions ? "hidden" : "unset";
  }

  const closeHamburger = () => {
    setShowHeaderOptions(false);
    document.body.style.overflow = "unset";
  }

  return (
    <section className={`${classes["header-container"]} ${hasScrolled ? classes["header-scrolled"] : ""}`}>
      <div className={classes["header-parent"]}>
        <div
          className={classes["header-hamburger"]}
          onClick={toggleHamburger}
        >
          <FontAwesomeIcon
            className={classes["header-hamburger-bars"]}
            icon={faBars}
          />
        </div>
        <div className={classes["header-logo"]}>
          <Link href="/">{headerTitle}</Link>
        </div>
        <div
          className={
            showHeaderOptions
              ? `${classes["header-options"]} ${classes["show-hamburger-options"]}`
              : classes["header-options"]
          }
          onClick={closeHamburger}
        >
          {getHeaderOptions()}
        </div>
      </div>
    </section>
  );
}
