import React from "react";
import "../styles.css";

function Navbar({ executeScroll, refs }) {
  return (
    <div>
      <nav className="whole">
        <a
          target="_blank"
          onClick={() => executeScroll(refs.aboutRef)}
          className="nav-element"
        >
          About
        </a>
        <a
          target="_blank"
          onClick={() => executeScroll(refs.skillsRef)}
          className="nav-element"
        >
          Skills
        </a>
        <a
          target="_blank"
          onClick={() => executeScroll(refs.projectsRef)}
          className="nav-element"
        >
          Projects
        </a>
        <a
          target="_blank"
          onClick={() => executeScroll(refs.blogsRef)}
          className="nav-element"
        >
          Blogs
        </a>
      </nav>
      <div className="cover-btn">
        <a
          target="_blank"
          onClick={() => executeScroll(refs.contactRef)}
          className="btn"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
