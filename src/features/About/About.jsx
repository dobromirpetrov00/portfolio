import React, { Component } from "react";
import { Icon } from "@iconify/react";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";
import reactIcon from "@iconify/icons-logos/react";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import pythonIcon from "@iconify/icons-logos/python";
import goIcon from "@iconify/icons-logos/gopher";

/**
 * Renders the About section of the application.
 * This component displays the user's profile picture, skills icons, and a description of the user's background and projects.
 * The content for this section is retrieved from the `sharedBasicInfo` and `resumeBasicInfo` props.
 */
class About extends Component {
  render() {
    // Check if sharedBasicInfo is available and set profile picture path
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }

    // Check if resumeBasicInfo is available and set section details
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var projects_text = this.props.resumeBasicInfo.projects_text;
      var projects_word = this.props.resumeBasicInfo.projects_word;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                  {/* Display icons for various technologies */}
                  <Icon
                    icon={tailwindIcon}
                    style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodejsIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={goIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-6 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    {/* Display colored circles as part of the card header */}
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                     {" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                     {" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {/* Display about section and projects link */}
                    {about} {projects_text}
                    <a href='https://github.com/dobromirpetrov00' target='_blank' rel="noopener noreferrer" style={{textDecoration: "underline"}}>
                      {projects_word}
                    </a>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }}

export default About;
