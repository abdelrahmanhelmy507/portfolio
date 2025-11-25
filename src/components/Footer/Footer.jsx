import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer flex ">
      <ul className='links flex '>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
      <div className="copy">
        <p>© 2025 Spencer Sharp. All rights reserved.</p>
      </div>
    </div>
  )
}
