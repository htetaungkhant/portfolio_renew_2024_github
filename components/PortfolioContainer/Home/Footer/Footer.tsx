import Image from "next/image";
import classes from "./Footer.module.css";
import ShapeBg from "@/assets/Home/shape-bg.svg";

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
