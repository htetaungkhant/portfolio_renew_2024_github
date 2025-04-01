import classes from "./Footer.module.scss";
import ShapeBg from "@/assets/Home/shape-bg.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-parent"]}>
        <Image 
          src={ShapeBg} 
          alt="Shape Background" 
          className={classes["footer-shape"]}
          priority
        />
      </div>
    </div>
  );
}
