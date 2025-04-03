import Image from "next/image";

import ShapeBg from "@/public/images/Home/shape-bg.svg";

import classes from "./Footer.module.scss";

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
