import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

class Results extends Component {
  constructor(props) {
    super(props);
    this.onSearchAgain = this.onSearchAgain.bind(this);
  }

  onSearchAgain() {
    this.props.onSearchAgain();
  }

  render() {
    let { shows } = this.props;
    let results = shows.map((show, index) => {
      // Looping through the list of items to show all of the shows requested
      return (
        <Col
          md={3}
          key={index}
          className="Results_item order-section container mb-4"
        >
          <Card>
            <img className="img-fluid" src={show.image} alt={show.name} />
            <Card.Body>
              <div className="dropdown justify-content-center">
                <span className="info-button bg-dark text-light">
                  view movie details
                </span>
                <div className="dropdown-content text-left">
                  <Card.Title className="Results_item_title">
                    <span>Title:</span> {show.name}
                  </Card.Title>
                  <Card.Title className="Results_item_title">
                    <span>Genre:</span> {show.genres}
                  </Card.Title>
                  <Card.Title className="Results_item_title">
                    <span>Rating:</span> {show.rating}
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Jumbotron>
        <button
          className="back-button mb-5 font-weight-bold bg-dark text-light"
          onClick={this.onSearchAgain}
        >
          BACK TO SEARCH
        </button>
        <div className="Results">{results}</div>
      </Jumbotron>
    );
  }
}

export default Results;
