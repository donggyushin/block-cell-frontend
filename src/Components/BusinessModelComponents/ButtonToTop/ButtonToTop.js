import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ButtonToTop = ({ scrollToTop }) => {
  return (
    <div className={cx("button-to-top")}>
      <span onClick={scrollToTop}>TOP</span>
    </div>
  );
};

export default ButtonToTop;
