import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import FunnyLine from "../FunnyLine";
import Molding from "../Molding";

const cx = classNames.bind(styles);

const CeoGreeting = () => {
  return (
    <Fade bottom>
      <div className={cx("CeoGreeting")}>
        <div className={cx("column", "top")}>
          <div className={cx("molding-image")}>
            <Molding />
          </div>
          <div className={cx("row-korean")}>
            <span>CEO 인삿말</span>
          </div>
          <div className={cx("row-english")}>
            <span>CEO greeting</span>
          </div>
        </div>
        <div className={cx("column")}>
          <FunnyLine />
        </div>
      </div>
    </Fade>
  );
};

export default CeoGreeting;
