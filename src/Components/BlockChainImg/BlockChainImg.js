import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BlockChainImg = () => {
  return (
    <div className={cx("block-chain")}>
      <div className={cx("image")}>
        <img
          alt={"block-chain"}
          width={"100%"}
          src={require("../../media/images/blockchainsample.jpg")}
        />
      </div>
      <div className={cx("text")}>
        <div className={cx("row")}>
          <span className={cx("top")}>"블럭셀?"</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("second-line")}>About Us</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("third-line")}>
            부동산 자산 유동화를 위한 블록체인 기반의 부동산 플랫폼 전문기업
          </span>
        </div>
        <div className={cx("row")}>
          <span className={cx("fourth-line")}>블럭셀을 소개합니다.</span>
        </div>
      </div>
    </div>
  );
};

export default BlockChainImg;
