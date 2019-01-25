import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar from "Components/BusinessModelComponents/NavVar";
import CopyRight from "Components/CopyRight";
import BlockChainImage from "Components/BusinessModelComponents/BlockChainImage";

const cx = classNames.bind(styles);

const BusinessModelPresenter = () => {
  return (
    <div className={cx("businessModel-presenter")}>
      <div className={cx("nav-var")}>
        <NavVar />
      </div>
      <div className={cx("blockchainimage-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("body")}>business model explain</div>
      <div className={cx("bottom")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default BusinessModelPresenter;
