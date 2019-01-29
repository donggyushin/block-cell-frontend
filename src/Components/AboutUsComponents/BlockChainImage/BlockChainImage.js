import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BlockChainImage = () => {
  return (
    <div className={cx("block-chain")}>
      <div className={cx("image")}>
        <img
          alt={"block-chain"}
          width={"100%"}
          src={require("../../../media/images/blockchainimage/blockchainimage.jpeg")}
        />
      </div>
      <div className={cx("text")}>
        <div className={cx("row")}>
          <span className={cx("top")}>소개합니다</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("second-line")}>블럭셀은?</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("third-line")}>About Blockcell</span>
        </div>
      </div>
    </div>
  );
};

export default BlockChainImage;