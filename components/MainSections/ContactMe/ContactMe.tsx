"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { faPaperPlane,faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import AnimatedSection from "@/components/Common/AnimatedSection/AnimatedSection";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton/ScrollToTopButton";
import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";
import { socialLinks } from "@/data/Common/constants";
import { contactLinks } from "@/data/ContactMe/constants";
import weChatQR from "@/data/ContactMe/images/WeChatID.png";

import classes from "./ContactMe.module.scss";

export default function ContactMe(props: { id: string; sectionName?: string }) {
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
      const data = { name, email, message };
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
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setBanner(error.response.data.msg);
        toast.error(error.response.data.msg);
      } else {
        setBanner("An unexpected error occurred.");
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setBool(false);
    }
  };

  return (
    <AnimatedSection className={classes["main-container"]} id={props.id}>
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
            {
              socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={link.iconClassName} />
                </a>
              ))
            }
          </div>
        </div>

        <div className={classes["back-form"]}>
          <div className={classes["col"]}>
            <h4>{contactLinks.title}</h4>
            {
              contactLinks.links.map((link) => (
                <div key={link.type}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.type}>
                    <FontAwesomeIcon icon={link.icon} className={classes["icon"]} />
                    <span>{link.description}</span>
                  </a>
                </div>
              ))
            }

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
      <ScrollToTopButton />
    </AnimatedSection>
  );
}
