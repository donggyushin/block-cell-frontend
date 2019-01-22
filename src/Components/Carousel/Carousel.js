import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CarouselComponent = ({ height }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={cx("container")}>
          <div className={cx("asd")}>
            <img
              alt="900x500"
              height={height}
              width={"100%"}
              src={require("../../media/images/carousel1 2.jpeg")}
            />
          </div>
          <div className={cx("cover")} />
        </div>

        <Carousel.Caption>
          <h3 className={cx("text")}>First slide label</h3>
          <p className={cx("text")}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={cx("container")}>
          <div className={cx("asd")}>
            <img
              alt="900x500"
              height={height}
              width={"100%"}
              src={
                "https://talentgarden.org/wp-content/uploads/2018/01/Screen-Shot-2017-12-11-at-12.00.26-PM.png"
              }
            />
          </div>
          <div className={cx("cover")} />
        </div>

        <Carousel.Caption>
          <h3 className={cx("text")}>Second slide label</h3>
          <p className={cx("text")}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={cx("container")}>
          <div className={cx("asd")}>
            <img
              alt="900x500"
              height={height}
              width={"100%"}
              src={
                "https://cdn-images-1.medium.com/max/1600/1*vYfRmR3ANliBjAq34fioTw.jpeg"
              }
            />
          </div>
          <div className={cx("cover")} />
        </div>

        <Carousel.Caption>
          <h3 className={cx("text")}>Third slide label</h3>
          <p className={cx("text")}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
