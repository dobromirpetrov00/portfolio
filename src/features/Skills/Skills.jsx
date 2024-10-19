import React, { Component } from "react";

/**
 * Renders a section displaying a list of skills icons and their names.
 * The skills data is retrieved from the `sharedSkills` and `resumeBasicInfo` props.
 * The section title is extracted from the `resumeBasicInfo` prop.
 */
class Skills extends Component {
  render() {
    // Check if sharedSkills and resumeBasicInfo props are available
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      // Extract the section name for skills from resumeBasicInfo
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      // Map over the sharedSkills icons to create a list of skill items
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
