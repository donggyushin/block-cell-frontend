import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TitlePresenter = ({ title, subTitle }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("title-container")}>
        <div className={cx("row")}>
          <div className={cx("square")} />
        </div>
        <div className={cx("row")}>
          <span className={cx("title")}>{title}</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("sub-title")}>{subTitle}</span>
        </div>
        <div className={cx("row")}>
          <div className={cx("line")} />
        </div>
      </div>
    </div>
  );
};

export default TitlePresenter;
