// import React from 'react'
import "./Hero.css";
import TextType from "./TextType";
import Lottie from "lottie-react";
import devanimation from "../../animation/Programming.json";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero-section flex">
      <div className="left-side ">
        <div className="avatar flex">
          <div className="personal-image">
            <img src="./me.png" alt="" />
          </div>
          <div className="verfied icon-verified"></div>
        </div>
        <h1 >
          Abdelrahman Helmy , <br />
          <TextType
            text={["Front End Developer", "Software Engineer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p>
          I'm Abdelrahman, a Front-End Developer from Egypt. I focus on building
          modern, responsive, and user-friendly web interfaces using the latest
          technologies. I enjoy turning ideas into clean, functional, and fast
          websites that solve real problems and deliver great user experiences.
        </p>

        <div className="icons  flex ">
            <a href="https://github.com/abdelrahmanhelmy507" target="_blank" className="icon ">
          <div className="icon icon-github">
          </div>
           </a>
           <a href="www.linkedin.com/in/abdelrahman-helmy-b19403284" target="_blank">
          <div className="icon icon-linkedin-square ">
          </div>
            </a>
         <a target="_blank" href="https://www.instagram.com/accounts/login/?next=%2Fbodaa272%2F&source=omni_redirect"> <div className="icon icon-instagram"></div></a>
          <a href="https://www.facebook.com/abdulrahman.helmy.311376" target="_blank"><div className="icon icon-social-facebook "></div></a>
          <a href="https://wa.me/201016281208" target="_blank" className="icon"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="right-side ">
        <Lottie className="dev " animationData={devanimation} speed={0.5} />
      </div>
    </div>
  );
}
