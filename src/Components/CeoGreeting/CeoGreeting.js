import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const CeoGreeting = () => {
  return (
    <Fade bottom>
      <div className={cx("CeoGreeting")}>
        <div className={cx("row")}>
          <h1>CEO의 인삿말</h1>
        </div>
        <div className={cx("row")}>
          <span>CEO greeting</span>
        </div>
        <div className={cx("row")}>
          <div />
        </div>
        <div className={cx("row")}>
          <div className={cx("column")} />
          <div className={cx("column")} />
          <div className={cx("column")} />
        </div>
      </div>
    </Fade>
  );
};

export default CeoGreeting;
