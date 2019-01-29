import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Carousel2 = ({ height }) => {
  return (
    <div className={cx("carousel-container")}>
      <Carousel>
        <Carousel.Item>
          <div className={cx("container")}>
            <div className={cx("asd")}>
              <img
                alt="900x500"
                width={"100%"}
                src={require("../../media/images/carousel/carousel4.jpeg")}
              />
            </div>
            <div className={cx("cover")} />
          </div>

          {/* <Carousel.Caption>
          <div className={cx("caption-container")}>
            <span className={cx("text")}>부동산 자산 유동화를 위한</span>
            <span className={cx("text")}>
              블록체인 기반의 부동산 플랫폼 전문기업 "블럭셀"
            </span>
          </div>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className={cx("container")}>
            <div className={cx("asd")}>
              <img
                alt="900x500"
                width={"100%"}
                src={require("../../media/images/carousel/carousel2.jpeg")}
              />
            </div>
            <div className={cx("cover")} />
          </div>

          {/* <Carousel.Caption>
          <div className={cx("caption-container")}>
            <span className={cx("text")}>부동산 자산 유동화를 위한</span>
            <span className={cx("text")}>
              블록체인 기반의 부동산 플랫폼 전문기업 "블럭셀"
            </span>
          </div>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className={cx("container")}>
            <div className={cx("asd")}>
              <img
                alt="900x500"
                width={"100%"}
                src={require("../../media/images/carousel/carousel3.jpeg")}
              />
            </div>
            <div className={cx("cover")} />
          </div>

          {/* <Carousel.Caption>
          <div className={cx("caption-container")}>
            <span className={cx("text")}>부동산 자산 유동화를 위한</span>
            <span className={cx("text")}>
              블록체인 기반의 부동산 플랫폼 전문기업 "블럭셀"
            </span>
          </div>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className={cx("container")}>
            <div className={cx("asd")}>
              <img
                alt="900x500"
                width={"100%"}
                src={require("../../media/images/carousel/carousel1.jpeg")}
              />
            </div>
            <div className={cx("cover")} />
          </div>

          {/* <Carousel.Caption>
          <div className={cx("caption-container")}>
            <span className={cx("text")}>부동산 자산 유동화를 위한</span>
            <span className={cx("text")}>
              블록체인 기반의 부동산 플랫폼 전문기업 "블럭셀"
            </span>
          </div>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      {/* <div className={cx("fixed-caption")}> */}
      <div className={cx("caption-container")}>
        <span className={cx("text")}>부동산 자산 유동화를 위한</span>
        <span className={cx("text")}>
          블록체인 기반의 부동산 플랫폼 전문기업 "블럭셀"
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Carousel2;
