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
    let results = shows.map((show, index) => {  // Looping through the list of items to show all of the shows requested
      return (
        <Col md={3}
          key={index}
          style={{ height: "450px" }}
          className="Results_item order-section container-fluid"
        >
          <Card style={{ height: "380px", width:"305px" }}>
            <div className="icon-container">
              <img
                className="Results_item_images order-picture"
                src={show.image}
                alt={show.name}
                width="303px"
                height="280px"
              />
              <Card.Body>
                <div className="dropdown">
                  <span className="info-button">Click here for more information</span>
                  <div className="dropdown-content text-center">
                    <Card.Title className="Results_item_title">
                      Title: <br/>  {show.name}
                    </Card.Title>
                    <Card.Title className="Results_item_title">
                      Genre: <br/> {show.genres}
                    </Card.Title>
                    <Card.Title className="Results_item_title">
                      Rating: <br/> {show.rating}
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
      );
    });

    return (
      <Jumbotron>
        <button
          className="back-button"
          onClick={this.onSearchAgain}
          style={{ marginBottom: "55px", fontWeight:"bold" }}
        >
          BACK TO SEARCH
        </button>
        <div className="Results">{results}</div>
      </Jumbotron>
    );
  }
}

export default Results;
