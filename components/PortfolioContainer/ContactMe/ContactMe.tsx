"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faSkype,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import axios from "axios";
import { toast } from "react-toastify";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import weChatQR from "@/assets/ContactMe/WeChatID.png";

import SectionHeading from "../../Common/SectionHeading/SectionHeading";
import Footer from "../footer/Footer";

import classes from "./ContactMe.module.scss";

export default function ContactMe(props: { id: string; sectionName?: string }) {
  let fadeInSectionHandler = (section: any) => {
    if (section.fadeInSection !== props.id) return;
    Animations.animations.fadeInSection(props.id);
  };

  ScrollService.currentSectionFadeIn.subscribe(fadeInSectionHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const submitForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: name.length === 0,
      email: email.length === 0,
      message: message.length === 0
    };
    setErrors(newErrors);

    try {
      let data = { name, email, message };
      setBool(true);
      const res = await axios.post(`/api/contactRoute`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ name: false, email: false, message: false });
      }
    } catch (error: any) {
      setBanner(error.response.data.msg);
      toast.error(error.response.data.msg);
    } finally {
      setBool(false);
    }
  };

  return (
    <section className={`${classes["main-container"]} fade-in`} id={props.id || ""}>
      <SectionHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className={classes["central-form"]}>
        <div className={classes["row"]}>
          <h2 className={classes["title"]}>
            <ReactTyped
              strings={["Contact Info", "Get In Touch"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
          <div className={classes["social-icons"]}>
            <a href="https://www.facebook.com/htetaungkhant1997/" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="https://www.linkedin.com/in/htet-khant-9003b6164/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin-square" />
            </a>
            <a href="https://www.instagram.com/nga_khant_18/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCMilPRhUqbaiOj7ZBKs9Byw" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube-square" />
            </a>
            <a href="https://x.com/masterhacker97" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter" />
            </a>
            <a href="https://github.com/htetaungkhant" target="_blank" rel="noreferrer">
              <i className="fa fa-github" />
            </a>
          </div>
        </div>

        <div className={classes["back-form"]}>
          <div className={classes["col"]}>
            <h4>Contact Links</h4>
            <div>
              <a href="mailto:job.htetaungkhant@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className={classes["icon"]} />
                <span>job.htetaungkhant@gmail.com</span>
              </a>
            </div>
            
            <div>
              <a href="https://wa.me/959798922327" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsappSquare} className={classes["icon"]} />
                <span>+959798922327</span>
              </a>
            </div>
            
            <div>
              <a href="skype:live:chitkogyi19950?chat" aria-label="Skype">
                <FontAwesomeIcon icon={faSkype} className={classes["icon"]} />
                <span>live:chitkogyi19950</span>
              </a>
            </div>
            
            <div>
              <a href="https://line.me/ti/p/~htetaungkhant97" target="_blank" rel="noopener noreferrer" aria-label="Line">
                <FontAwesomeIcon icon={faLine} className={classes["icon"]} />
                <span>htetaungkhant97</span>
              </a>
            </div>

            <div className={classes["qr-code-container"]}>
              <span className={classes["qr-label"]}>WeChat QR Code</span>
              <div className={classes["qr-code"]}>
                <Image src={weChatQR} alt="WeChat QR Code" width={120} height={120} />
              </div>
            </div>

          </div>

          <form onSubmit={submitForm}>
            <p className={banner === "Thank You For Contacting Me." ? classes["success-message"] : classes["error-message"]}>
              {banner}
            </p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Please enter your name!"
              onChange={handleName}
              value={name}
              className={errors.name ? classes["error"] : ""}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email!"
              onChange={handleEmail}
              value={email}
              className={errors.email ? classes["error"] : ""}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message that you want to tell me!"
              rows={5}
              onChange={handleMessage}
              value={message}
              className={errors.message ? classes["error"] : ""}
            />

            <button 
              type="submit" 
              className={`${classes["submit-btn"]} ${bool ? classes["loading"] : ""}`}
              disabled={bool}
            >
              {bool ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className={classes["spinner"]} />
                  Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
