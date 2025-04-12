"use client";

import React, { useState } from "react";
import Image from "next/image";

import { resumeBullets } from "@/data/Resume/constants";

import classes from "./index.module.scss";

interface ResumeBulletsProps {
  selectedBulletIndex: number;
  onBulletClick: (index: number) => void;
}

const ResumeBullets: React.FC<ResumeBulletsProps> = ({
  selectedBulletIndex,
  onBulletClick,
}) => {
  return (
    <div className={classes["resume-bullets"]}>
      <div className={classes["bullet-container"]}>
        <div className={classes["bullet-icons"]}></div>
        <div className={classes["bullets"]}>
          {resumeBullets.map((bullet, index) => (
            <div
              key={index}
              onClick={() => onBulletClick(index)}
              className={classes["bullet-row-container"]}
            >
              <div
                className={
                  index === selectedBulletIndex
                    ? `${classes["bullet"]} ${classes["selected-bullet"]}`
                    : classes["bullet"]
                }
              >
                <Image
                  className={classes["bullet-logo"]}
                  src={bullet.image}
                  alt="bullet-logo"
                />
                <span className={classes["bullet-label"]}>{bullet.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ResumeActionsProps {
  children: React.ReactNode;
}

const ResumeActions = ({ children }: ResumeActionsProps) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<{
    style?: React.CSSProperties;
  }>({});

  const handleCarousal = (index: number) => {
    const offsetHeight = 560;
    const newCarousalOffset = {
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  return (
    <div className={classes["resume-card"]}>
      <ResumeBullets
        selectedBulletIndex={selectedBulletIndex}
        onBulletClick={handleCarousal}
      />
      <div className={classes["resume-bullet-details"]}>
        <div
          style={carousalOffsetStyle?.style}
          className={classes["resume-details-carousal"]}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ResumeActions;
