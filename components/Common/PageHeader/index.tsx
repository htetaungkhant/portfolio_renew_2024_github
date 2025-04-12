"use client";

import React, { useEffect,useState } from "react";
import Link from "next/link";
import { faBars, faHouseUser } from "@fortawesome/free-solid-svg-icons";
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

      // Find which section is currently in view
      const sections = HEADER_MENU.map(menu => document.getElementById(menu.link.replace('#', '')));
      const viewportHeight = window.innerHeight;
      const buffer = viewportHeight * 0.3; // 30% of viewport height as buffer

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in view (with buffer)
          if (rect.top <= buffer && rect.bottom >= buffer) {
            setSelectedSection(i);
            break;
          }
        }
      }

      // Handle top of page
      if (scrollPosition < viewportHeight * 0.5) {
        setSelectedSection(0);
      }
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

  const onHeaderMenuClick = (index: number, name: string) => {
    if (name !== "Blog") {
      document.body.style.overflow = "unset";
      // setSelectedSection(index);
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
          onClick={() => onHeaderMenuClick(i, Menu.name)}
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
          {hasScrolled && (
            <ScrollLink href="/" className={classes["header-home"]}>
              <FontAwesomeIcon icon={faHouseUser} size='xl' />
            </ScrollLink>
          )}
          {getHeaderOptions()}
        </div>
      </div>
    </section>
  );
}
