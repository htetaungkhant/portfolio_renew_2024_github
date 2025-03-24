import Image from "next/image";

import ShapeBg from "@/assets/Home/shape-bg.png";

import classes from "./Footer.module.css";

export default function footer() {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-parent"]}>
        <Image src={ShapeBg} alt="Shape Background" />
      </div>
    </div>
  );
}
