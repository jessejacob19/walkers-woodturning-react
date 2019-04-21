import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <p>© Walkers Woodturning 2019</p>
          </Container>
        </Jumbotron>
        ;
      </React.Fragment>
    );
  }
}

export default Footer;
