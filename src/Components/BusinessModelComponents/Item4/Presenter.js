import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Item1 = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <img
          width={"100%"}
          alt={"back"}
          src={require("../../../media/images/businessmodel/sibal4.png")}
        />
      </div>
      <div className={cx("text")}>
        <span>-부동산 관련 개발사업의 전반</span>
        <span>
          -부동산 개발사업 관련 부대사업 일체 (철거, 분양, 건물관리 및 임대사업,
          대지조성사업 등)
        </span>
        <span>
          -SOC사업, BOT(BTO사업 포함), PFV사업, SPC를 통한 사업 참여 등
        </span>
        <span>
          -해외 프로젝트 참여 (금융, 코인, 개발사업, 기타 우수사업 등)
        </span>
        <span>-파트너사 및 제휴사업자를 통한 간접투자사업 등</span>
      </div>
    </div>
  );
};

export default Item1;
