//About.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const About = () => {
  return (
    <section id="about" className="container text-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About Me
          </h2>
          <div className="profile-image-container">
            <img
              src="./profile2.jpeg"
              alt="Adarsh pic"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <p className="section-description mt-4">
            I am a skilled Front-end developer with over 1+ years of hands-on
            experience in Front-end development. My expertise includes using
            technologies such as React js/React+vite, JavaScript ES6, HTML, CSS,
            Bootstrap, SQL & Nodejs. As a problem solver, I have successfully
            designed and developed user-friendly, responsive web applications.
            Let's connect and explore exciting opportunities in the world of web
            development
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
