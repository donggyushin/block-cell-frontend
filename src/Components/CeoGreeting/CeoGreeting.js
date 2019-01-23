import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import FunnyLine from "../FunnyLine";

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
        {/* <div className={cx("row-last")}>
          <div className={cx("column1")} />
          <div className={cx("column2")} />
          <div className={cx("column1")} />
        </div> */}
        <div className={cx("funny-line")}>
          <FunnyLine />
        </div>
      </div>
    </Fade>
  );
};

export default CeoGreeting;
