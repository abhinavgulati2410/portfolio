import React from "react";
import "../styles.css";
import intimage from "../A.png";
import Navbar from "./Navbar";

function Intro(props) {
  return (
    <div>
      <div className="top">
        <p>ABHINAV GULATI</p>
      </div>
      <div className="nav-call">
        <Navbar {...props} />
      </div>
      <div id="intro" className="whole-intro">
        <p className="hello">Hello, I am Abhinav. </p>
        <p className="i-am">I am an aspiring Web Developer. </p>
      </div>
      <div className="images">
        <img src={intimage} width="500px" />
      </div>
      <p className="line">"I like to dive into MERN stack and explore."</p>
    </div>
  );
}

export default Intro;
