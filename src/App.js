import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import Experience from "./Experience";
import github from "./github-logo.svg";
import linkedin from "./linkedin-logo.png";
import resumeLogo from "./resume-logo.png";
import resume from "./resume.pdf";

class App extends React.Component {
  state = {
    display: "default",
  };

  onChange = (display) => {
    this.setState({ display });
  };

  render() {
    return (
      <div className="app">
        <NavBar onChange={this.onChange} />
        {this.state.display === "default" && (
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

              <a href={resume} target="_blank">
                <img className="icon" src={resumeLogo} alt="github" />
              </a>
            </div>
            <div className="icon-links"></div>
          </div>
        )}
        {this.state.display === "about" && <About />}
        {this.state.display === "experience" && <Experience />}
      </div>
    );
  }
}

export default App;
