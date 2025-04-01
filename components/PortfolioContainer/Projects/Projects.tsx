"use client";

import React, { useEffect } from "react";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import ADDAS_LINE_Enhance from "@/assets/Projects/ADDAS_LINE_Enhance.webp";
import Applicant_Tracking_System from "@/assets/Projects/Applicant_Tracking_System.webp";
import AI_Testing from "@/assets/Projects/AI_Testing.webp";
import Agent_Associate_Matching from "@/assets/Projects/Agent_Associate_Matching.jpeg";
import Enterprise_Insurance_Application_System_for_Bank from "@/assets/Projects/Enterprise_Insurance_Application_System_for_Bank.jpeg";
import ColorsRainbow from "@/assets/Projects/ColorsRainbow.webp";
import Ananda from "@/assets/Projects/Ananda.webp";
import Myanma_Insurance from "@/assets/Projects/Myanma_Insurance.webp";
import Sai_Sai_Pay_and_Uab_Pay from "@/assets/Projects/Sai_Sai_Pay_and_Uab_Pay.jpeg";
import Personal_Portfolio_Websites from "@/assets/Projects/Personal_Portfolio_Websites.jpeg";
import YCC_Trading_Center from "@/assets/Projects/YCC_Trading_Center.jpeg";
import Vending_Machine_with_QR_code from "@/assets/Projects/Vending_Machine_with_QR_code.jpeg";
import Runnable_Project_Hub_using_container_technology from "@/assets/Projects/Runnable_Project_Hub_using_Container_Technology.jpeg";

import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";
import ProjectCard from "./ProjectCard/ProjectCard";

import classes from "./Projects.module.scss";

const Projects = (props: { id: string; screenName?: string }) => {
  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projectsDetails = [
    {
      title: "ADDAS LINE Enhance",
      duration: { fromDate: "", toDate: "" },
      description:
        "It’s like a chat bot at LINE to support everything while you sightsee in Japan.",
      technologies: ["React", "LINE’s messaging API"],
      image: ADDAS_LINE_Enhance,
    },
    {
      title: "Applicant Tracking System",
      duration: { fromDate: "", toDate: "" },
      description:
        "It’s a web app to track the applications (resumes) of the applicants by using AI. It includes two systems. One is for the consumers to submit their resumes and another one is the administration dashboard to manage the users and send the emails.",
      technologies: ["Next.js", "Shadcn UI"],
      image: Applicant_Tracking_System,
    },
    {
      title: "AI Testing",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is a web app to create, delete, edit and run scripts for AI Testing tools. Besides, it aims to display the result reports from AI Testing tools.",
      technologies: ["React JS", "Material UI", "Redux"],
      image: AI_Testing,
    },
    {
      title: "Agent Associate Matching",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is a agent associate matching web app to find agents as insurance consultant.",
      technologies: ["React JS", "Material UI", "Redux"],
      image: Agent_Associate_Matching,
    },
    {
      title: "Enterprise Insurance Application System for Bank",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an insurance web app to purchase insurances through payments.",
      technologies: ["React JS(TypeScript)", "Bootstrap", "Storybook", "Redux"],
      image: Enterprise_Insurance_Application_System_for_Bank,
    },
    {
      title: "ColorsRainbow",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is knowledge sharing and reading app. It aims to purchase and read books, magazines and news. It supports to search easily by articles and categories.",
      technologies: ["React Native", "Redux"],
      image: ColorsRainbow,
    },
    {
      title: "Ananda",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is internet self-care web app and it aims to top up internet bill and check internet usage and remaining balance.",
      technologies: ["Angular.js"],
      image: Ananda,
    },
    {
      title: "Myanma Insurance",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an insurance app. It aims to purchase insurances of Myanmar’s Insurance and to read about Myanmar’s Insurances and to calculate the price of Insurances.",
      technologies: ["React Native", "Redux"],
      image: Myanma_Insurance,
    },
    {
      title: "Sai Sai Pay and Uab Pay",
      duration: { fromDate: "", toDate: "" },
      description:
        "They are e-wallet apps. It aims to save as digital money and to transfer easily between people and to checkout everything as digital currency.",
      technologies: ["React Native", "Redux"],
      image: Sai_Sai_Pay_and_Uab_Pay,
    },
    {
      title: "Personal Portfolio Websites",
      duration: { fromDate: "", toDate: "" },
      description:
        "I have personal portfolio websites with two versions. One is developed in 2020 and another one is developed in 2023. And currently, I’m developing another customizable version for 2025. So, I temporarily deployed old portfolio website at Vercel.",
      technologies: ["React", "Next.js", "Strapi CMS", "Sanity CMS"],
      image: Personal_Portfolio_Websites,
    },
    {
      title: "YCC Trading Center (Internship Project)",
      duration: { fromDate: "", toDate: "" },
      description:
        "It is an e-commerce web app. It aims to trade things( new goods and secondhand products ) between University students.",
      technologies: ["React", "Express.js", "MySQL"],
      image: YCC_Trading_Center,
    },
    {
      title: "Vending Machine with QR code (Academic Project)",
      duration: { fromDate: "2018", toDate: "2019" },
      description:
        "It’s an automated machine that provides items such as snacks, beverages, cigarettes, and lottery tickets to consumers after paying money with QR code from mobile app.",
      technologies: ["IoT (Python)", "Android (Java)", "Express.js", "MongoDB"],
      image: Vending_Machine_with_QR_code,
    },
    {
      title: "Runnable Project Hub using container technology (Academic Thesis)",
      duration: { fromDate: "", toDate: "" },
      description:
        "It supports to maintain and display all academic projects of students in one place.",
      technologies: ["Docker as container technology", "React", "Go", "MySQL"],
      image: Runnable_Project_Hub_using_container_technology,
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
            image={projectsDetails.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
