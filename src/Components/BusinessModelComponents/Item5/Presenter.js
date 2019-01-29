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
          src={require("../../../media/images/businessmodel/sibal5.png")}
        />
      </div>
      <div className={cx("text")}>
        <span>
          일본 (주) 카르나 : 스위스 코인 거래소, 인도네시아 코인거래소 및 폐이
          사업,
        </span>
        <span>
          홍채보안 시스템사업 및 전자기기(홍채수첩, 보안시스템 설치 및 운영)
          세계 각 코인거래소 홍채보안 사업주관사
        </span>
        <br />
        <span>
          (주) A. S. I : (주) 카르나와 이리언스 차이나 및 이리언스 인도네시아와
          홍채보안사업 진출
        </span>
        <span>“아이 알”코인 및 코인거래소, 개발사업 전문업체</span>
      </div>
    </div>
  );
};

export default Item1;
