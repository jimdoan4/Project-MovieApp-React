import React, { Component } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
#navbar {
  padding: 8px 25px;
  border: none;
  background: #363130;
  transition: padding-top 0.3s, padding-bottom 0.3s;

}

#navbar .navbar-toggler {
  background: #363130;
  border: none;

}

#navbar .navbar-nav .nav-item .nav-link {
  color: white;
  font-weight: bold;
  font-size: 33px;
  font-family: "muse-500", Arial, sans-serif;
  transition: all 0.3s ease-out;
  padding-left: 30px;
  padding-right: 30px;
}

#navbar .navbar-nav .nav-item .nav-link.active,
#navbar .navbar-nav .nav-item .nav-link:hover {
  background: #e36056;
  color: white !important;
  transition: all 0.5s ease-out;
  box-shadow: 1px 0px 0px 1px #e36056;
}

.center-nav-links {
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  }
`;
export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
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
              <a className="nav-link btn wow bounceInUp" data-wow-delay="0.2s">
                IT'S POPCORN TIME!
                &nbsp;
              <i className="fa fa-film" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </NavContainer>
    );
  }
}
