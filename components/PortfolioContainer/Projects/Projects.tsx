"use client";

import React from "react";

import AnimatedSection from "@/components/Common/AnimatedSection/AnimatedSection";
import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import ProjectCard from "./ProjectCard/ProjectCard";

import { projectsDetails } from "@/data/Projects/constants";

import classes from "./Projects.module.scss";

const Projects = (props: { id: string; sectionName?: string }) => {

  return (
    <AnimatedSection
      className={classes["projects-container"]}
      id={props.id || ""}
    >
      <SectionHeading
        title={"Recent Projects"}
        subHeading={"What I did?"}
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
    </AnimatedSection>
  );
};

export default Projects;
