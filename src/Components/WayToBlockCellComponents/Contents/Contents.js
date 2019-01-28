import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("column-left")}>
          <span>찾아오시는 길</span>
        </div>
        <div className={cx("column-right")}>
          <span>Way to Blockcell</span>
        </div>
      </div>
      <div className={cx("under-row")}>
        <img
          alt={"way-to-blockcell"}
          width={"100%"}
          src={require("../../../media/images/WayToBlockcell/map.png")}
        />
        {/* <div className={cx("column-left")}>
          <img
            alt={"map"}
            width={"100%"}
            src={
              "http://d-df.org/wp-content/uploads/syrian-civil-war-wikipedia-within-syria-map-control.png"
            }
          />
        </div>
        <div className={cx("column-right")}>
          <div className={cx("upper-row")}>
            <div className={cx("column-left2")}>
              <img
                width={"100%"}
                alt={"simple logo"}
                src={
                  "data:image/png;base64,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"
                }
              />
            </div>
            <div className={cx("column-right2")}>
              <img
                alt={"simple logo2"}
                width={"100%"}
                src={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Little_Caesars_logo.png/250px-Little_Caesars_logo.png"
                }
              />
            </div>
          </div>
          <div className={cx("lower-row")}>
            <span>서울시 강남구 테헤란로 146 현익빌딩 6층 (주) 블럭셀</span>
            <span>(역삼역 3번 출구 신한은행건물 6층)</span>
            <span>Tel 02. 561. 3300</span>
            <span>Fax 02. 564. 0087</span>
            <span>blockcell@naver.com</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contents;
