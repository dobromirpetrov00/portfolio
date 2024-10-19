import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Renders a contact section with information from the `resumeBasicInfo` prop.
 *
 * The contact section includes:
 * - A title and description of the contact information
 * - Colored circles to visually indicate the contact section
 * - The contact email address, with a link to open the user's email client
 */
class Contact extends Component {
  render() {
    // Check if resumeBasicInfo is available in props
    if (this.props.resumeBasicInfo) {
      // Extract contact information from resumeBasicInfo
      var contact_title = this.props.resumeBasicInfo.contact_title;
      var contact_desc = this.props.resumeBasicInfo.contact_desc;
      var contact_at = this.props.resumeBasicInfo.contact_at;
    }

    return (
      <section id="contact">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{contact_title}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-6 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    {/* Display colored circles using iconify */}
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
                    {/* Display contact description and email */}
                    <p>
                      {contact_desc} <i className="fas fa-envelope"></i> {contact_at} <a href="mailto:dobpet00@gmail.com" style={{ textDecoration: "underline" }}>dobpet00@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
