import { useState, useEffect } from "react";
import "./Header.css";
export default function Header() {
  const [show, setShow] = useState(false);
  const [mood, setMood] = useState(localStorage.getItem("mood") || "dark");

  useEffect(() => {
    if(mood == "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  }, [mood]);
  return (
    <div className="header flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShow(true);
        }}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("mood", mood == "dark" ? "light" : "dark");
          setMood(localStorage.getItem("mood"))
        }}
        className="icon-moon-o"
      ></button>
      {show && (
        <div className="fixed">
          <ul>
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShow(false);
                }}
              ></button>
            </li>
            <li onClick={() => {
                  setShow(false);
                }}>
            <a href="#about" >About</a>
          </li>
          <li onClick={() => {
                  setShow(false);
                }}>
            <a href="#Projects">Projects</a>
          </li>
          <li onClick={() => {
                  setShow(false);
                }}>
            <a href="#Skills">Skills</a>
          </li>
          <li onClick={() => {
                  setShow(false);
                }}>
            <a href="#Contact">Contact</a>
          </li>
          </ul>
        </div>
      )}
    </div>
  );
}
