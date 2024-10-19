import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import About from "./features/About/About";
import Experience from "./features/Experience/Experience";
import Projects from "./features/Projects/Projects";
import Skills from "./features/Skills/Skills";
import Contact from "./features/Contact/Contact";

/**
 * The main App component that manages the state and rendering of the portfolio website.
 * It handles loading and applying the selected language, swapping the active language icon,
 * and rendering the various sections of the portfolio (About, Projects, Skills, Experience, Contact).
 */
class App extends Component {
  constructor(props) {
    super();
    // Initialize state with empty data objects
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  /**
   * Applies the picked language to the application by swapping the active language icon, setting the document language, and loading the corresponding resume data.
   *
   * @param {string} pickedLanguage - The language code of the picked language.
   * @param {string} oppositeLangIconId - The ID of the language icon for the opposite language.
   */
  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `/assets/data/res_primaryLanguage.json`
        : `/assets/data/res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  /**
   * Swaps the currently active language icon by removing the brightness filter from the opposite language icon and applying the brightness filter to the picked language icon.
   *
   * @param {string} oppositeLangIconId - The ID of the language icon for the opposite language.
   */
  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  /**
   * Loads the shared data and applies the picked language when the component mounts.
   * This is called once when the component is first rendered.
   */
  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  /**
   * Loads the resume data from the specified path and updates the component state with the loaded data.
   *
   * @param {string} path - The path to the JSON file containing the resume data.
   */
  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  /**
   * Loads the shared data for the application and updates the component state with the loaded data.
   * This method is called when the component is first mounted to initialize the shared data.
   */
  loadSharedData() {
    $.ajax({
      url: `/assets/data/portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  /**
   * Renders the main application components, including the header, language selection, and various sections like About, Projects, Skills, Experience, and Contact.
   * This method is called by React to render the component.
   *
   * @returns {JSX.Element} The rendered JSX elements for the application.
   */
  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-states"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-bulgaria"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Contact
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
