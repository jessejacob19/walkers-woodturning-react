import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
class GallerySelected extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container className="p-t-3">
          <Row>
            <Col className="col-lg-12">
              <h1>Shop</h1>
            </Col>
          </Row>
        </Container>



      </React.Fragment>
    );
  }
}

export default GallerySelected;
