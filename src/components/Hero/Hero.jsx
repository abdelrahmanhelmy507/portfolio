// import React from 'react'
import './Hero.css'

import Lottie from 'lottie-react';
import devanimation from '../../animation/Programming.json'
export default function Hero() {
  return (
    <div className="hero-section flex">
      <div className="left-side ">
        <div className="avatar flex">
          <div className="personal-image">
            <img src="/me.png" alt="" />
          </div>
            <div className="verfied icon-verified"></div>
        </div>
        <h1>
          Abd El Rahman Helmy ,front End Developer  
        </h1>
        <p>
          I’m Spencer, a software designer and entrepreneur based in New York City.
          I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
        </p>
        <div className="icons  flex">
          <div className="icon icon-github"><a href=""></a></div>
          <div className="icon icon-linkedin-square "><a href="www.linkedin.com/in/abdelrahman-helmy-b19403284"></a></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-social-facebook "></div>
        </div>
      </div>
      <div className="right-side ">
        <Lottie
          className="dev "
          animationData={devanimation}
          speed = {0.5}
        />
      </div>
    </div>
  )
}
