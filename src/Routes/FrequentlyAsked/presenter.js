import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarPresenter from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/FrequentlyAskedComponents/BlockchainImage";
import BulletinContainer from "Components/FrequentlyAskedComponents/Bulletin";
import SearchVarContainer from "Components/FrequentlyAskedComponents/SearchVar";
import CopyRight from "Components/CopyRight";
import BulletinNavigator from "Components/BulletinNavigator";
const cx = classNames.bind(styles);

const FrequentlyAskedPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar")}>
        <NavVarPresenter />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("navigator")}>
        <BulletinNavigator />
      </div>
      <div className={cx("body")}>
        <div className={cx("contents")}>
          <BulletinContainer />
        </div>
        <div className={cx("search-var")}>
          <SearchVarContainer />
        </div>
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default FrequentlyAskedPresenter;
