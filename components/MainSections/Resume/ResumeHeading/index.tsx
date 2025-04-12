import classes from "./index.module.scss";

/* REUSABLE MINOR COMPONENTS */
const ResumeHeading = (props: {
  className?: string;
  heading?: string;
  fromDate?: string;
  toDate?: string;
  subHeading?: string;
  description?: string;
}) => {
  return (
    <div className={`${classes["resume-heading"]} ${props.className}`}>
      <div className={classes["resume-main-heading"]}>
        <div className={classes["heading-bullet"]}></div>
        <span>{props.heading ? props.heading : ""}</span>
        {props.fromDate && props.toDate ? (
          <div className={classes["heading-date"]}>
            {props.fromDate + "-" + props.toDate}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={classes["resume-sub-heading"]}>
        <span>{props.subHeading ? props.subHeading : ""}</span>
      </div>
      <div className={classes["resume-heading-description"]}>
        <span>{props.description ? props.description : ""}</span>
      </div>
    </div>
  );
};

export default ResumeHeading;
