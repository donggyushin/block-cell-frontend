import React from "react";
import styles from "./styles.module.scss";
import Carousel from "Components/Carousel/Carousel";
import NavVar from "Components/NavVar";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const homePresenter = () => {
  return (
    <div className={cx("home")}>
      <div className={cx("nav-var")}>
        <NavVar />
      </div>
      <div className={cx("carousel")}>
        <Carousel height={550} />
      </div>
    </div>
  );
};

export default homePresenter;
