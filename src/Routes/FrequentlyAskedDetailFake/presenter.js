import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarPresenter from "Components/NoticeComponents/NavVar";
import BlockchainImagePresenter from "Components/FrequentlyAskedDetailComponents/BlockChainImage/presenter";
import CopyRight from "Components/CopyRight";
import ContentsFake1 from "Components/FrequentlyAskedDetailFakeComponents/contents";

const cx = classNames.bind(styles);

const FrequentlyAskedPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("nav-var-container")}>
        <NavVarPresenter />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockchainImagePresenter />
      </div>
      <div className={cx("contents-container")}>
        <ContentsFake1 />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default FrequentlyAskedPresenter;
