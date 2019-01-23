import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

const cx = classNames.bind(styles);

const BlockCellToken = () => {
  return (
    <div className={cx("BlockCellToken")}>
      <Fade bottom>
        <div className={cx("header")}>
          <Roll duration={1300} delay={400} bottom>
            <div className={cx("circle")}>
              <img
                alt={"vision.png"}
                width={"100%"}
                src={require("../../media/images/vision.png")}
              />
            </div>
          </Roll>

          <Fade delay={1700} duration={1500}>
            <div className={cx("text")}>
              <div className={cx("level4")}>
                <span>시행</span>
              </div>
              <div className={cx("level3")}>
                <div className={cx("left")}>
                  <span>게임 개발</span>
                </div>
                <div className={cx("right")}>
                  <span>철거</span>
                </div>
              </div>
              <div className={cx("level2")}>
                <div className={cx("left")}>
                  <span>부동산 투자</span>
                </div>
                <div className={cx("right")}>
                  <span>분양</span>
                </div>
              </div>
              <div className={cx("level1")}>
                <div className={cx("left")}>
                  <span>M & A</span>
                </div>
                <div className={cx("right")}>
                  <span>개발</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className={cx("bottom")}>
          <span>BLOCK CELL</span>
        </div>
      </Fade>
    </div>
  );
};

export default BlockCellToken;
