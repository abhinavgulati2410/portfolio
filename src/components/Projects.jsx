import React from "react";
import "../styles.css";
import pomo from "../pomo-screen.png";
import netflix from "../netflix.png";
import ChatStar from "../ChatStar.jpeg";

function Projects() {
  return (
    <div className="blog-container">
      <p className="blog-head">What I've created</p>
      <div className="whole-blog">
        <div className="ind-proj">
          <div text-align="center">
            <img src={pomo} alt="pomo app SS" width="400px" />
          </div>
          <p className="proj-heading">Pomodoro Timer</p>
          <p className="proj-des">
            A time management tool to increase productivity and concentration
          </p>
          <a
            href="https://github.com/abhinavgulati2410/pomodoro"
            className="view-btn"
          >
            View Code
          </a>
        </div>
        <div className="ind-proj">
          <div text-align="center">
            <img src={netflix} alt="netflix app SS" width="400px" />
          </div>
          <p className="proj-heading">Netflix Clone</p>
          <p className="proj-des">
            A clone of the Homepage UI of popular application Netflix.
          </p>
          <a
            href="https://github.com/abhinavgulati2410/netflix-clone"
            className="view-btn"
          >
            View Code
          </a>
        </div>
        <div className="ind-proj">
          <div text-align="center">
            <img src={ChatStar} alt="Chat App SS" width="400px" />
          </div>
          <p className="proj-heading">ChatStar</p>
          <p className="proj-des">
            A real time multi-client chat application built using Java.
          </p>
          <a
            href="https://github.com/abhinavgulati2410/ChatStar"
            className="view-btn"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
