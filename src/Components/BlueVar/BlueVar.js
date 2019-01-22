import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BlueVar = () => {
  return (
    <div className={cx("bluevar")}>
      <div className={cx("big-text")}>
        <span className={cx("row")}>블록셀 화이팅</span>
        <span className={cx("row")}>블록셀 화이팅</span>
      </div>
      <div className={cx("just-line")} />
      <div className={cx("small-text")}>
        <span className={cx("row")}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
        </span>
        <span className={cx("row")}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </span>
      </div>
    </div>
  );
};

export default BlueVar;
