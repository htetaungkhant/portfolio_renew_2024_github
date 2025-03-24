import classes from "./ProjectCard.module.css";

const ProjectCard = (props: {
  className?: string;
  heading?: string;
  fromDate?: string;
  toDate?: string;
  description?: string;
  technologies?: string[];
}) => {
  return (
    <div className={`${classes["project-card"]} ${props.className}`}>
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
      <div className={classes["project-technologies"]}>
        <div className={classes["technologies-container"]}>
          <span className={classes["project-technologies-title"]}>
            Technologies Used:
          </span>
          {props.technologies ? (
            props.technologies.map((technology, index) => (
              <span
                className={classes["project-technologies-text"]}
                key={index}
              >
                {technology}
              </span>
            ))
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
