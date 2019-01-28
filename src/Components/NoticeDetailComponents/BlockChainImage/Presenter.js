import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BlockChainImagePrenter = () => {
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
          <span className={cx("top")}>블럭셀's</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("second-line")}>공지사항</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("third-line")}>Notice</span>
        </div>
      </div>
    </div>
  );
};

export default BlockChainImagePrenter;
