"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import classes from "./index.module.scss";

export function ContactForm() {
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
  );
}
