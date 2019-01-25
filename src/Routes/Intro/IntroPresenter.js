import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Carousel2 from "../../Components/Carousel2";
import NavVar2 from "../../Components/NavVar2";
import CopyRight from "../../Components/CopyRight";

const cx = classNames.bind(styles);

const IntroPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("container-body")}>
        <div className={cx("nav-var")}>
          <NavVar2 />
        </div>
        <Carousel2 />
      </div>
      <div className={cx("container-bottom")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default IntroPresenter;
