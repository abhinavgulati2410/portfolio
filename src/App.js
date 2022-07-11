import React, { useRef } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (ref) => ref.current.scrollIntoView();
  return (
    <div>
      <div className="intro-ref">
        <Intro
          executeScroll={executeScroll}
          refs={{ aboutRef, skillsRef, projectsRef, blogsRef, contactRef }}
        />
      </div>
      <div className="about-ref" ref={aboutRef}>
        <About />
      </div>
      <div className="skills-ref" ref={skillsRef}>
        <Skills />
      </div>
      <div className="projects-ref" ref={projectsRef}>
        <Projects />
      </div>
      <div className="blogs-ref" ref={blogsRef}>
        <Blogs />
      </div>
      <div className="contacts-ref" ref={contactRef}>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
