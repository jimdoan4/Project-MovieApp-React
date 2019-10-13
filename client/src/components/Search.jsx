import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.onSubmitQuery = this.onSubmitQuery.bind(this);
  }

  handleSearchInput(e) {  // Grabbing text input
    this.props.handleSearchInput(e.target.value);
  }

  onSubmitQuery(e) {
    e.preventDefault();  // Preventing browser from refreshing
    this.props.onSubmitQuery(this.props.query);
  }

  render() {
    return (
      <div id="page-container" className="Search">
        <div id="search-container">
          <form onSubmit={this.onSubmitQuery}>
            <input
              className="search-btn text-center"
              type="text"
              placeholder="Search a movie"
              value={this.props.query}
              onChange={this.handleSearchInput}
            />
            <button type="submit" className="text-center back-button">
              {" "}
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{ fontSize: "20px" }}
              ></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
