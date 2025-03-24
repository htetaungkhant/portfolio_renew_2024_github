"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faSkype,
  faLine,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import axios from "axios";
import { toast } from "react-toastify";

import ScrollService from "@/lib/ScrollService";
import Animations from "@/lib/Animations";

import imgBack from "@/assets/ContactMe/mailz.jpg";
import load1 from "@/assets/ContactMe/load2.gif";

import ScreenHeading from "../../Common/ScreenHeading/ScreenHeading";
import Footer from "../footer/Footer";

import classes from "./ContactMe.module.css";

export default function ContactMe(props: { id: string; screenName?: string }) {
  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

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
    try {
      let data = {
        name,
        email,
        message,
      };
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
      }
    } catch (error: any) {
      // console.log(error.response);
      setBanner(error.response.data.msg);
    } finally {
      setBool(false);
    }
  };

  return (
    <div className={`${classes["main-container"]} fade-in`} id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className={classes["central-form"]}>
        <div className={classes["row"]}>
          <h2 className={classes["title"]}>
            <ReactTyped
              strings={["Contact Info", "Get In Touch 📧"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
          <a
            href="https://www.facebook.com/htetaungkhant1997/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-square" />
          </a>
          <a
            href="https://www.linkedin.com/in/htet-khant-9003b6164/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square" />
          </a>
          <a
            href="https://www.instagram.com/nga_khant_18/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMilPRhUqbaiOj7ZBKs9Byw"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-youtube-square" />
          </a>
          <a
            href="https://twitter.com/htetkhant2021"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className={classes["col"]}>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className={classes["icon"]} />
            <span>job.htetaungkhant@gmail.com</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className={classes["icon"]}
            />
            <span>+959798922327</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faSkype} className={classes["icon"]} />
            <span>live:chitkogyi19950</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faLine} className={classes["icon"]} />
            <span>htetaungkhant97</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faWeixin} className={classes["icon"]} />
            <span>htetaungkhant2002</span>
          </div>
        </div>
        <div className={classes["back-form"]}>
          <div className={classes["img-back"]}>
            <h4>Send Your Email Here!</h4>
            <Image src={imgBack} alt="Not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Please enter your name!"
              onChange={handleName}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email!"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Message that you want to tell me!"
              onChange={handleMessage}
              value={message}
            />

            <div className={classes["send-btn"]}>
              <button type="submit">
                send
                {bool ? (
                  <b className={classes["load"]}>
                    <Image src={load1} alt="Not responding" />
                  </b>
                ) : (
                  <i className="fa fa-paper-plane" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
