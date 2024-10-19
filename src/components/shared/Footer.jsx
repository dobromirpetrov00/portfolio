import React, { Component } from "react";

/**
 * Renders a footer component that displays social media links and a copyright notice.
 * The footer component uses the `sharedBasicInfo` prop to retrieve the social media information and display it.
 * If the `sharedBasicInfo` prop is not available, the copyright notice will display "???" instead of a year.
 */
class Footer extends Component {
  render() {
    // Check if sharedBasicInfo is available
    if (this.props.sharedBasicInfo) {
      // Map over the social networks to create a list of links
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                &copy;{" "}
                {this.props.sharedBasicInfo
                  ? 9061
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
