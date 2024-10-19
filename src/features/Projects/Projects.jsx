import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

/**
 * The `Projects` component is responsible for rendering a section of projects on a resume website.
 * It maps over an array of project data and renders a project item for each one, which can be clicked to show a project details modal.
 * The component also renders the project details modal, which is controlled by the component's state.
 */
class Projects extends Component {
  constructor(props) {
    super(props);
    // Initialize state with default values
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  /**
   * Renders the Projects section of a resume website, including a list of projects and a project details modal.
   *
   * The `render()` method is responsible for the following:
   * - Defining functions to show and close the project details modal
   * - Mapping over the `resumeProjects` array to create project elements
   * - Rendering the project details modal component
   * - Rendering the Projects section with the list of projects
   */
  render() {
    // Function to show the details modal and set the project data
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    // Function to close the details modal
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      // Get the section name from the resume basic info
      var sectionName = this.props.resumeBasicInfo.section_name.projects;

      // Map over the projects to create project elements
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
