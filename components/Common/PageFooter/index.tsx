import classes from "./index.module.scss";

export const PageFooter = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section className={`${classes["page-footer"]} ${className}`} style={style}>
      <span>
        Created By <strong>Htet Aung Khant</strong> | All Rights Reserved!
      </span>
    </section>
  );
};
