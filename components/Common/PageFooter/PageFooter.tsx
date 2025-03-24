import classes from "./PageFooter.module.css";

export const PageFooter = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={`${classes["page-footer"]} ${className}`} style={style}>
      <span>
        Created By <strong>Htet Aung Khant</strong> | All Rights Reserved!
      </span>
    </div>
  );
};
