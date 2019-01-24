import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ButtonToTop = ({ scrollToTop }) => {
  return (
    <div onClick={scrollToTop} className={cx("button-to-top")}>
      <span>TOP</span>
    </div>
  );
};

export default ButtonToTop;
