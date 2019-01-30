import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BlockChainImagePresenter = () => {
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
          <span className={cx("top")}>블럭셀</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("second-line")}>묻고 답하기</span>
        </div>
        <div className={cx("row")}>
          <span className={cx("third-line")}>Q&A</span>
        </div>
      </div>
    </div>
  );
};

export default BlockChainImagePresenter;
