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
      <div id="page-container">
        <div id="search-container">
          <form onSubmit={this.onSubmitQuery}>
            <input
              className="search-btn bg-light text-dark text-center font-weight-bold"
              type="text"
              placeholder="Search a movie"
              value={this.props.query}
              onChange={this.handleSearchInput}
            />
            <button type="submit" className="text-center look-button ml-4 bg-dark text-light"l>
              {" "}
              <i
                className="fa fa-search lead"
                aria-hidden="true"
              ></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
