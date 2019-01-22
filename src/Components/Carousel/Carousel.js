import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.scss";

const CarouselComponent = ({ width, height }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={"asd"}>
          <img
            alt="900x500"
            height={500}
            src={
              "https://apollo-ireland.akamaized.net/v1/files/xjb2rskliae32-PL/image;s=644x461"
            }
          />
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={"asd"}>
          <img
            alt="900x500"
            height={500}
            src={
              "https://talentgarden.org/wp-content/uploads/2018/01/Screen-Shot-2017-12-11-at-12.00.26-PM.png"
            }
          />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={"asd"}>
          <img
            alt="900x500"
            height={500}
            src={
              "https://cdn-images-1.medium.com/max/1600/1*vYfRmR3ANliBjAq34fioTw.jpeg"
            }
          />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
