import React, { Component, Fragment } from "react";
import { Card, Button, Jumbotron } from "react-bootstrap";
import Slider from "react-slick";
class GallerySelected extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1530,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Jumbotron>
        <div className="galleryTitle">
          <h1>Gallery</h1>
        </div>
        <Slider {...settings}>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.wixstatic.com/media/c399df_4144e6fea97d4eb88c31bfd1149e2e6b~mv2.jpg/v1/fill/w_502,h_547,al_c,q_90,usm_0.66_1.00_0.01/c399df_4144e6fea97d4eb88c31bfd1149e2e6b~mv2.webp"
              />
              <Card.Body variant="flush">
                <Card.Title>Splash Series</Card.Title>
                <Card.Text>Finish: Danish Oil </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                variant="top"
                src="https://static.wixstatic.com/media/c399df_94e54ddf7bd6437ba7287455195ecf89~mv2_d_2048_1365_s_2.jpg/v1/fill/w_1032,h_688,al_c,q_90,usm_0.66_1.00_0.01/c399df_94e54ddf7bd6437ba7287455195ecf89~mv2_d_2048_1365_s_2.webp"
              />
              <Card.Body variant="flush">
                <Card.Title>Cowboy Hat</Card.Title>
                <Card.Text>Finish: Danish Oil </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                variant="top"
                src="https://static.wixstatic.com/media/c399df_d562f07c17e1ec5169b3c4eda55fe702.jpg/v1/fill/w_502,h_376,al_c,q_90,usm_0.66_1.00_0.01/c399df_d562f07c17e1ec5169b3c4eda55fe702.webp"
              />
              <Card.Body variant="flush">
                <Card.Title>Rata Natural Edge</Card.Title>
                <Card.Text>Timber: Rata</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                variant="top"
                src="https://static.wixstatic.com/media/c399df_d5cf0c3afb404fb39693747bf87affa9~mv2_d_2775_2775_s_4_2.jpg/v1/fill/w_502,h_502,al_c,q_90,usm_0.66_1.00_0.01/c399df_d5cf0c3afb404fb39693747bf87affa9~mv2_d_2775_2775_s_4_2.webp"
              />
              <Card.Body>
                <Card.Title>Swamp Kauri Giant Wall Hanging</Card.Title>
                <Card.Text>Finish: Danish Oil</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                variant="top"
                src="https://static.wixstatic.com/media/c399df_af644d95b682426eb8688ff859d63b3a~mv2.jpg/v1/fill/w_502,h_503,al_c,q_90,usm_0.66_1.00_0.01/c399df_af644d95b682426eb8688ff859d63b3a~mv2.webp"
              />
              <Card.Body>
                <Card.Title>Camphor & Pyrography</Card.Title>
                <Card.Text>Finish: Danish Oil & Pyrography</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: "18rem", height: "26rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Splash Series</Card.Title>
                <Card.Text>Finish: Danish Oil </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Jumbotron>
    );
  }
}

export default GallerySelected;
