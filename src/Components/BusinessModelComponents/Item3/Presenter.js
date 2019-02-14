import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Item1 = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <img
          alt={"back"}
          src={require("../../../media/images/businessmodel/sibal3.png")}
        />
      </div>
      <div className={cx("text")}>
        <span>-국내 게임전문 유명사와 공동개발 및 지분참여</span>
        <span>-국내외 전문 업체와 공동 진행 및 투자</span>
      </div>
    </div>
  );
};

export default Item1;
