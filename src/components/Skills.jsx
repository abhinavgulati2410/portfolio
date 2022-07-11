import React from "react";
import "../styles.css";
import cpp from "../cpp-logo-icon.png";
import reactjs from "../Skillicons/ReactJS.jpg";
import java from "../Skillicons/java.png";
import mysql from "../Skillicons/mysql.png";
import express from "../Skillicons/express.png";
import node from "../Skillicons/node-js.png";
import mongo from "../Skillicons/mongodb.png";

function Skills() {
  return (
    <div className="skill-div">
      <p className="skill-head">What I Know?</p>
      <div className="for-ani">
        <div className="whole-skills">
          <div className="row">
            <div className="skill">
              <img src={reactjs} alt="ReactJS icon" width="150px" />
              <p className="htm-desc">ReactJS</p>
            </div>
            <div className="skill">
              <img src={node} alt="NodeJS icon" width="150px" />
              <p className="htm-desc">NodeJS</p>
            </div>
            <div className="skill">
              <img src={express} alt="ExpressJS icon" width="150px" />
              <p className="htm-desc">ExpressJS</p>
            </div>
          </div>
          <div className="row">
            <div className="skill">
              <img src={mongo} alt="Mongo icon" width="150px" />
              <p className="htm-desc">Mongo DB</p>
            </div>
            <div className="skill">
              <img src={java} alt="java image" width="150px" />
              <p className="cpp-desc">Java</p>
            </div>
            <div className="skill">
              <img src={mysql} alt="MySQL image" width="150px" />
              <p className="python-desc">MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
