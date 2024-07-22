// Skills.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ paddingLeft: "0px" }}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        Skills
      </h2>
      <ul className="skills-list">
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          React js
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          HTML5
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          CSS3
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Bootstrap
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          SQL
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          MongoDB
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />C Programming
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Java
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          React native
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          .net
        </li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
