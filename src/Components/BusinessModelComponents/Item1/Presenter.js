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
          src={require("../../../media/images/businessmodel/sibal1.png")}
        />
      </div>
      <div className={cx("text")}>
        <span>1) 당사 발행의 상품권 (블럭 셀)</span>
        <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
      </div>
    </div>
  );
};

export default Item1;
