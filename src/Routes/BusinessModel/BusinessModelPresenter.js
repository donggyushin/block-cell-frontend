import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar from "Components/BusinessModelComponents/NavVar";
import CopyRight from "Components/CopyRight";
import BlockChainImage from "Components/BusinessModelComponents/BlockChainImage";
import Contents from "Components/BusinessModelComponents/Contents";
import ButtonToTop from "Components/BusinessModelComponents/ButtonToTop";

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
      <div className={cx("body")}>
        <div className={cx("body-contents")}>
          <Contents />
        </div>
      </div>
      <div className={cx("bottom")}>
        <CopyRight />
      </div>
      <div className={cx("button-to-top-container")}>
        <ButtonToTop />
      </div>
    </div>
  );
};

export default BusinessModelPresenter;
