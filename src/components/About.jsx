import React from "react";
import "../styles.css";

function About() {
  return (
    <div>
      <div className="whole-about">
        <p className="about">About</p>
        <p className="quote">
          "Your destiny is what you make, not what is made for you."
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1c7agOokrEwLMrwAKfncwd09Ql459tJet/view?usp=sharing"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
