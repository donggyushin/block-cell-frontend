import React from "react";
import styles from "./stlyes.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const WayToBlockCell = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("nav-var")}>nav-var</div>
      <div className={cx("deck")}>deck</div>
      <div className={cx("contents")}>contents</div>
      <div className={cx("bottom")}>bottom</div>
    </div>
  );
};

export default WayToBlockCell;
