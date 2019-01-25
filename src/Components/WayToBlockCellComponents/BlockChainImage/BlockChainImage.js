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
          src={require("../../../media/images/blockchainsample.jpg")}
        />
      </div>
      <div className={cx("text")}>
        <div className={cx("row")}>
          <span className={cx("top")}>블럭셀</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("second-line")}>찾아오시는 길</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("third-line")}>Way to Blockcell</span>
        </div>
      </div>
    </div>
  );
};

export default BlockChainImage;