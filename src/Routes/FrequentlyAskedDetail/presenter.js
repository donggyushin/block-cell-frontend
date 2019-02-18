import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarPresenter from "Components/NoticeComponents/NavVar";
import BlockchainImagePresenter from "Components/FrequentlyAskedDetailComponents/BlockChainImage/presenter";
import ContentsContainer from "Components/FrequentlyAskedDetailComponents/Contents";
import CopyRight from "Components/CopyRight";

const cx = classNames.bind(styles);

const FrequentlyAskedPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-outer")}>
        <div className={cx("nav-var-container")}>
          <NavVarPresenter />
        </div>
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockchainImagePresenter />
      </div>
      <div className={cx("contents-container")}>
        <ContentsContainer />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default FrequentlyAskedPresenter;
