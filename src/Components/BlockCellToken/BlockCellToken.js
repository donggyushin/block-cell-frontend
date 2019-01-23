import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const BlockCellToken = () => {
  return (
    <Fade bottom>
      <div className={cx("BlockCellToken")}>
        <div className={cx("row")}>
          <span>BLOCK CELL TOKEN</span>
        </div>
        <div className={cx("row")}>
          <div className={cx("column")}>
            <div className={cx("circle")} />
            <div className={cx("contents")}>
              <div className={cx("title")}>
                <span>블록셀</span>
              </div>
              <div className={cx("content")}>
                <p>
                  Sapien nec sagittis aliquam malesuada bibendum. Quis auctor
                  elit sed vulputate mi sit amet mauris commodo. Nullam eget
                  felis eget nunc lobortis mattis. Semper risus in hendrerit
                  gravida rutrum quisque. Consectetur purus ut faucibus pulv
                </p>
              </div>
            </div>
          </div>
          <div className={cx("column")}>column</div>
        </div>
      </div>
    </Fade>
  );
};

export default BlockCellToken;
