import React from "react";
import "./Contact.css";

import { useForm, ValidationError } from "@formspree/react";

import Lottie from "lottie-react";
import emialanimation from "../../animation/verification.json";
import succeeded from "../../animation/successfully.json";

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("myzpoyvg");
  if (state.succeeded) {
    return (
      <p className="submit-message">
        <Lottie
          className="succeede-animation"
          loop={false}
          animationData={succeeded}
        />
        Thank you for signing up!
      </p>
    );
  }
  return (
    <div id="Contact" className="contact-us">
      <div className="head">
        <span className="icon-envelope"></span>
        <span className="title">Contact us</span>
        <p>
          contact us for more information and get notified when i published
          something new
        </p>
      </div>
      <div className="flex parent ">
        <div className="left-side ">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Emial Address</label>
              <input type="email" id="email" required name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="message flex">
              <label htmlFor="message">Your message</label>
              <textarea type="text" id="message" required name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
        <div className="right-side animation ">
          <Lottie className=" emialanimation" animationData={emialanimation} />
        </div>
      </div>
    </div>
  );
}
