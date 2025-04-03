import classes from "./SectionHeading.module.scss";

export default function ScreenHeading(props: {
  title: string;
  subHeading?: string;
}) {
  return (
    <div className={classes["heading-container"]}>
      <div className={classes["screen-heading"]}>
        <span>{props.title}</span>
      </div>
      {props.subHeading && (
        <div className={classes["screen-sub-heading"]}>
          <span>{props.subHeading}</span>
        </div>
      )}
      <div className={classes["heading-seperator"]}>
        <div className={classes["seperator-line"]}></div>
        <div className={classes["seperator-blob"]}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
