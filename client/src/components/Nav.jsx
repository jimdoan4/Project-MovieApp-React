import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto center-nav-links">
            <li className="nav-item">
              <a className="nav-link btn">
                IT'S POPCORN TIME!
                &nbsp;
              <i className="fa fa-film" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
