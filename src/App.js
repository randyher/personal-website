import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import github from "./github-logo.svg";
import linkedin from "./linkedin-logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="main">
          <h1>Randy Herasme</h1>
          <h2>Software Engineer</h2>
          <h2>New York, NY</h2>
          <div className="icon-container">
            <hr></hr>
            <a href="https://www.linkedin.com/in/randy-herasme">
              <img className="icon" src={linkedin} alt="linkedin" />
            </a>

            <a href="https://github.com/randyher">
              <img className="icon" src={github} alt="github" />
            </a>
          </div>
          <div className="icon-links"></div>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
