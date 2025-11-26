import React from 'react'
import './Footer.css'
import '../Hero/Hero.css'
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer flex ">
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
      <div className="copy">
        <p>© 2025 Spencer Sharp. All rights reserved.</p>
      </div>
    </div>
  )
}
