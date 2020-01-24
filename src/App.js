import React from "react";
import "./App.css";
import github from "./github-logo.svg";
import linkedin from "./linkedin-logo.png";

function App() {
  return (
    <div className="main">
      <h1>Randy Herasme</h1>
      <h2>Software Engineer</h2>
      <h2>New York, NY</h2>
      <div className="icon-container">
        <hr></hr>
        <a
          href="https://github.com/graciemcguire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/gracie-mcguire-43a9b361/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="icon-links"></div>
    </div>
  );
}

export default App;
