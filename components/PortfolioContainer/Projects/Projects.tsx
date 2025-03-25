"use client";

import React, { useEffect } from "react";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";
import ProjectCard from "./ProjectCard/ProjectCard";

import classes from "./Projects.module.css";

const Projects = (props: { id: string; screenName?: string }) => {
  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projectsDetails = [
    {
      title: "AI Testing",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is a web app to create, delete, edit and run scripts for AI Testing tools. Besides, it aims to display the result reports from AI Testing tools.",
      technologies: ["React JS", "Material UI", "Redux"],
    },
    {
      title: "Agent Associate Matching",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is a agent associate matching web app to find agents as insurance consultant.",
      technologies: ["React JS", "Material UI", "Redux"],
    },
    {
      title: "Enterprise Insurance Application System for Bank",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an insurance web app to purchase insurances through payments.",
      technologies: ["React JS(TypeScript)", "Bootstrap", "Storybook", "Redux"],
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is a Personal Portfolio website to showcase all my details and projects at one place.",
      technologies: ["React JS", "Bootstrap"],
    },
    {
      title: "ColorsRainbow",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is knowledge sharing and reading app. It aims to purchase and read books, magazines and news. It supports to search easily by articles and categories.",
      technologies: ["React Native", "Redux"],
    },
    {
      title: "Ananda",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is internet self-care web app and it aims to top up internet bill and check internet usage and remaining balance.",
      technologies: ["Angular JS"],
    },
    {
      title: "Myanma Insurance",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an insurance app. It aims to purchase insurances of Myanmar’s Insurance and to read about Myanmar’s Insurances and to calculate the price of Insurances.",
      technologies: ["React Native", "Redux"],
    },
    {
      title: "Sai Sai Pay and Uab Pay",
      duration: { fromDate: "", toDate: "" },
      description:
        "They are e-wallet apps. It aims to save as digital money and to transfer easily between people and to checkout everything as digital currency.",
      technologies: ["React Native", "Redux"],
    },
    {
      title: "My Secretary",
      duration: { fromDate: "", toDate: "" },
      description:
        "It aims to save money transactions between personal cases. And to display daily, monthly and annual expense records by graph and digits.",
      technologies: ["React", "Express Js", "MongoDB"],
    },
    {
      title: "Runnable Project Hub",
      duration: { fromDate: "", toDate: "" },
      description:
        "It supports to maintain students’ academic projects. Can see all projects of university students together.Easy to use and can search and run instantly in one place.",
      technologies: ["Docker as container technology", "React", "Go", "MySQL"],
    },
    {
      title: "YCC Trading Center",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an e-commerce web app. It aims to trade things( new goods and secondhand products ) between University students.",
      technologies: ["React", "Express Js", "MySQL"],
    },
    {
      title: "Vending Machine with QR code",
      duration: { fromDate: "2018", toDate: "2019" },
      description:
        "It’s an automated machine that provides items such as snacks, beverages, cigarettes and lottery tickets to consumers after paying money with QR code from mobile app.",
      technologies: ["IoT (Python)", "Android (Java)", "Express Js", "MongoDB"],
    },
  ];

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className={`${classes["projects-container"]} fade-in`}
      id={props.id || ""}
    >
      <ScreenHeading
        title={"Projects"}
        subHeading={"Projects that I experienced"}
      />
      <div className={classes["projects-cards-container"]}>
        {projectsDetails.map((projectsDetails, index) => (
          <ProjectCard
            key={index}
            heading={projectsDetails.title}
            technologies={projectsDetails.technologies}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
