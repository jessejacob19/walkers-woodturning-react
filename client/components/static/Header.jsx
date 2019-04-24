import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Jumbotron, Container } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  home() {}
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <h1>
              <header />
            </h1>
            <p>
              this will include the wwt crest, some information and the shopping
              cart
            </p>
          </Container>
        </Jumbotron>
        ;
      </React.Fragment>
    );
  }
}

export default Header;
