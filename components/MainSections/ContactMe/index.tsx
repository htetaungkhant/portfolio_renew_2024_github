import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnimatedSection from "@/components/Common/AnimatedSection";
import ReactTypedRCC from "@/components/Common/ReactTypedRCC";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";
import SectionHeading from "@/components/Common/SectionHeading";
import { socialLinks } from "@/data/Common/constants";
import { contactLinks } from "@/data/ContactMe/constants";
import weChatQR from "@/data/ContactMe/images/WeChatID.png";

import { ContactForm } from "./ContactMeActions";
import classes from "./index.module.scss";

export default function ContactMe(props: { id: string; sectionName?: string }) {
  return (
    <AnimatedSection className={classes["main-container"]} id={props.id}>
      <SectionHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className={classes["central-form"]}>
      <div className={classes["row"]}>
        <h2 className={classes["title"]}>
          <ReactTypedRCC
            strings={["Contact Info", "Get In Touch"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <div className={classes["social-icons"]}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <i className={link.iconClassName} />
            </a>
          ))}
        </div>
      </div>
        <div className={classes["back-form"]}>
          <div className={classes["col"]}>
            <h4>{contactLinks.title}</h4>
            {contactLinks.links.map((link) => (
              <div key={link.type}>
                <a href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.type}>
                  <FontAwesomeIcon icon={link.icon} className={classes["icon"]} />
                  <span>{link.description}</span>
                </a>
              </div>
            ))}

            <div className={classes["qr-code-container"]}>
              <span className={classes["qr-label"]}>WeChat QR Code</span>
              <div className={classes["qr-code"]}>
                <Image src={weChatQR} alt="WeChat QR Code" width={120} height={120} />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <ScrollToTopButton />
    </AnimatedSection>
  );
}
