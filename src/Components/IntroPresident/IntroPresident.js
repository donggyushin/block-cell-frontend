import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const IntroPresident = () => {
  return (
    <Fade bottom>
      <div className={cx("IntroPresident")}>
        <div className={cx("column")}>
          <div className={cx("row")}>
            <span>회장 최창식</span>
          </div>
          <div className={cx("row")} />
          <div className={cx("row")}>
            <p>
              블럭셀은 블럭셀이다블럭셀은 블럭셀이다블럭셀은 블럭셀이다 블럭셀은
              블럭셀이다블럭셀은 블럭셀이다 블럭셀은
              <br />
              <br />
              블럭셀이다블럭셀은 블럭셀이다블럭셀은 블럭셀이다 블럭셀은
              블럭셀이다블럭셀은 블럭셀이다
            </p>
          </div>
        </div>
        <div className={cx("column")}>
          <img alt={"president"} src={require("../../media/images/leo.jpg")} />
        </div>
      </div>
    </Fade>
  );
};

export default IntroPresident;
