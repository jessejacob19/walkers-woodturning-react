import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  home() {}
  render() {
    return (
      <div className="header">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Walkers Woodturning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#Gallery">Gallery</Nav.Link>
              <Nav.Link href="#Courses">Courses</Nav.Link>
              <Nav.Link href="#Demonstrations">Demonstrations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Links">Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
