import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
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
      </div>
      <div className={cx("only-mobile")}>
        <span>조금 더 나은 화면을 준비중입니다!</span>
      </div>
    </div>
  );
};

export default Contents;
