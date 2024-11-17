// Projects.js
import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./Breadcrumbs";
import "./style.css";

const Projects = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/projects" },
  ];

  return (
    <section id="projects" className="container text-center">
      <Breadcrumbs paths={breadcrumbsPaths} />
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                Livescraper, https://livescraper.com/
              </h5>
              <p className="card-text">
                Designed the UI and implemented CSS styling for the website,
                optimizing performance and design across all pages, maintainance
                the entire front-end functionality, using MERN STACK.
              </p>
            </div>
          </div>
        </div>
        {/* edusity */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Edusity, https://devadarsh.netlify.app/</h5>
              <p className="card-text">
                Our cutting-edge curriculum is designed to empower students with
                the knowledge, skills, and experiences to needed excel in the
                dynamic field of education.
                Used: React+vite, Nodejs & CSS3
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        {/* edusity */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                Designed and developed the official Portfolio Website for myself
                using React js, Bootstrap, Node js, JavaScript, CSS.
              </p>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">E-commerce Platform</h5>
              <p className="card-text">
                Built a fully functional e-commerce platform with features like
                product listing, cart management, using React js & Node.js.
              </p>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Weather application</h5>
              <p className="card-text">
                Todays Weather app is a web application which will tell the
                users about the weather details of any particular city . The
                easy and Interactive User Interface will help our users to
                easily know about the temperature , wind speed, humidity and
                description about the weather. using React js, Talwind css,
                Nodejs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
