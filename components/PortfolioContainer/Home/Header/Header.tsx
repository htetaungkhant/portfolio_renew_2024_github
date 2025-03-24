"use client";

import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "@/lib/commonUtils";
import ScrollService from "@/lib/ScrollService";

import classes from "./Header.module.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen: any) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        {Screen.screen_name === "Blog" ? (
          <a
            href="https://medium.com/@chitkogyi19950"
            target="_blank"
            rel="noreferrer"
          >
            {Screen.screen_name}
          </a>
        ) : (
          <span>{Screen.screen_name}</span>
        )}
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index: number) => {
    let styles = `${classes["header-option"]} `;
    if (index < TOTAL_SCREENS.length - 1)
      styles += `${classes["header-option-seperator"]} `;

    if (selectedScreen === index)
      styles += `${classes["selected-header-option"]} `;

    return styles;
  };

  const switchScreen = (
    index: number,
    screen: { screen_name: string; component?: (props: any) => JSX.Element }
  ) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

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
