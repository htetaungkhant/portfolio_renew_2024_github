import Image, { StaticImageData } from "next/image";

import classes from "./index.module.scss";

const ProjectCard = (props: {
  className?: string;
  heading?: string;
  fromDate?: string;
  toDate?: string;
  description?: string;
  technologies?: string[];
  image?: StaticImageData;
}) => {
  return (
    <div className={`${classes["project-card"]} ${props.className}`}>
      {props.image && (
        <div className={classes["project-image-container"]}>
          <Image 
            src={props.image}
            alt={props.heading || "Project Image"}
            className={classes["project-image"]}
            width={400}
            height={300}
            priority
          />
          <div className={classes["image-overlay"]}>
            <div className={classes["project-technologies"]}>
              {props.technologies?.map((technology, index) => (
                <span
                  className={classes["project-technologies-text"]}
                  key={index}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={classes["project-content"]}>
        <div className={classes["project-heading"]}>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className={classes["heading-date"]}>
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={classes["project-description"]}>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
