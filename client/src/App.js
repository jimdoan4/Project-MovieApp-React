import React, { Component } from "react";
import Nav from "./components/Nav";
import SearchContainer from "./components/SearchContainer";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const HomeContainer = styled.div`
  .trending-section {
    padding: 30px 0px 0px 0px;
    font-family: "muse-500", Arial, sans-serif;
  }
  .new-section {
    font-family: "muse-500", Arial, sans-serif;
  }
  .scary-section {
    font-family: "muse-500", Arial, sans-serif;
  }
  .kids-section {
    font-family: "muse-500", Arial, sans-serif;
  }
  .section-title {
    text-align: left;
    color: black;
    font-size: 22px;
    margin-bottom: 25px;
    font-family: "muse-500", Arial, sans-serif;
  }

  .col-md-3 img {
    height: 350px!important;
    width: 340px;
    box-shadow: 1px 3px 12px 0px #b3b3b3;
  }

  .col-md-3 img:hover {
    opacity: .8;
    background-color: black;
  }
`;
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HomeContainer>
          <header className="main-header"></header>
          <SearchContainer/>
          <div className="trending-section m-4">
            <Container className="text-center">
              <h4 className="section-title">New & Trending Videos</h4>

              <Row>
                <Col md={3}>
                    <img
                      src="http://www.thebrokaw.com/uploads/8/6/7/3/86738218/published/dora-version-3_1.jpg?1566406566"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://cectheatres.com/omniweb/poster_715354482.jpg"
                      alt="Support"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://media.cinemark.com/media/75959311/md_spider_man_far_from_home_extended_cut.jpg"
                      alt="Encourage"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="kids-section m-4">
            <Container className="text-center">
              <h4 className="section-title">Kids Movies</h4>
              <Row>
                <Col md={3}>
                    <img
                      src="https://www.todaysparent.com/wp-content/uploads/2018/04/best-kids-movies-us-netflix-charlie-and-the-chocolate-factory.jpg"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://redtricom.files.wordpress.com/2017/05/ugly-dolls.jpg?w=605"
                      alt="Supports"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2019-toy-story-4-1555083312.jpg"
                      alt="Encourages"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-how-to-train-your-dragon-1543261100.jpg?crop=1.00xw:0.949xh;0,0.0505xh&resize=480:*"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>
              </Row>{" "}
            </Container>
          </div>

          <div className="new-section m-4">
            <Container className="text-center">
              <h4 className="section-title">New & Trending Videos</h4>

              <Row>
                <Col md={3}>
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-kid-who-would-be-king-1543259868.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=480:*"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://pbs.twimg.com/media/CGXtzRrWoAA9mED.jpg"
                      alt="Support"
                      className="img-fluid"
                    /> 
                </Col>

                <Col md={3}>
                    <img
                      src="https://s31395.pcdn.co/wp-content/uploads/2016/02/travel_movies_for_kids_finding_nemo.png"
                      alt="Encourage"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://thenewscrunch.com/wp-content/uploads/2019/09/Screenshot-2019-09-13-at-10.42.31-AM.png"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="scary-section m-4">
            <Container className="text-center">
              <h4 className="section-title">Scary & Suspense Videos</h4>

              <Row>
                <Col md={3}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://www.indiewire.com/wp-content/uploads/2017/05/the-descent-2005.jpg?w=674"
                      alt="Support"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://resizing.flixster.com/xzo0e_KgG8zZ2WUEwEcLgrub8qc=/180x267/v1.bTsxMjg4NDYxMDtqOzE4MjY5OzIwNDg7MjAyNTszMDAw"
                      alt="Encourage"
                      className="img-fluid"
                    />
                </Col>

                <Col md={3}>
                    <img
                      src="https://cdn3.movieweb.com/i/movie/qQD9MBpolzQqa0XhNixkXHegdnXp3A/384:50/Annabelle-Comes-Home.jpg"
                      alt="Idea"
                      className="img-fluid"
                    />
                </Col>
              </Row>
            </Container>
          </div>
        </HomeContainer>
      </div>
    );
  }
}

export default App;