import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

/**
 * Renders the Experience section of the resume, displaying a vertical timeline of the user's work experience.
 *
 * The component expects the following props:
 * - `resumeExperience`: an array of work experience objects, each with the following properties:
 *   - `years`: the years the work experience spanned
 *   - `title`: the title of the work experience
 *   - `technologies`: an array of technologies used in the work experience
 *   - `mainTech`: an array of the main technologies used in the work experience
 * - `resumeBasicInfo`: an object containing basic information about the resume, including the section name for "experience"
 *
 * The component maps over the `resumeExperience` array to create a vertical timeline element for each work experience, displaying the years, title, and badges for the main and other technologies used.
 */
class Experience extends Component {
  render() {
    // Check if resumeExperience and resumeBasicInfo props are available
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      // Extract the section name for experience from resumeBasicInfo
      var sectionName = this.props.resumeBasicInfo.section_name.experience;

      // Map over resumeExperience to create timeline elements for each work experience
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies; // List of technologies used
        const mainTechnologies = work.mainTech; // List of main technologies

        // Create badges for main technologies
        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        // Create badges for other technologies
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        // Return a VerticalTimelineElement for each work experience
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years} // Display the years of the work experience
            iconStyle={{
              background: "#ff1aff",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-node experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    // Render the experience section
    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#ff1aff",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
