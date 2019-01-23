import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FunnyLine = () => {
  return (
    <div className={cx("funny-line")}>
      <div className={cx("column1")} />
      <div className={cx("column2")} />
      <div className={cx("column1")} />
    </div>
  );
};

export default FunnyLine;
