import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("column-title-in-korean")}>
          <span>채용안내</span>
        </div>
        <div className={cx("column-title-in-eng")}>
          <span>Recruit</span>
        </div>
      </div>
    </div>
  );
};

export default Contents;