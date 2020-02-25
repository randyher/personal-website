import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <h2 style={{ "margin-left": "1rem", "margin-top": "1rem" }}>About</h2>
          <div className="about-text-container">
            Hey! I am Randy, a software engineer and educator from New York who
            is passionate about the journey and end-result of building web and
            native applications. I aim to develop tools that empower and foster
            growth for their users.
          </div>

          <div className="about-text-container">
            I am always open and willing to learn new things, but for now, these
            are the technologies I have experience with:
            <ul className="tech-list">
              <li>Javascript</li>
              <li>Ruby</li>
              <li>HTML + CSS</li>
              <li>React / React Native</li>
              <li>Ruby on Rails</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
        </div>

        <img className="portrait" src={require("./randy-img-color.jpg")} />
      </div>
    );
  }
}

export default About;
