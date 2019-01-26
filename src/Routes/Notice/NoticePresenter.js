import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import BlockChainImage from "Components/NoticeComponents/BlockChainImage";
import NavVar from "Components/NoticeComponents/NavVar";
import Contents from "Components/NoticeComponents/Contents";

const cx = classNames.bind(styles);

const NoticePresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("nav-var-container")}>
        <NavVar />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("body")}>
        <div className={cx("contents")}>
          <Contents />
        </div>
        <div className={cx("search-var")}>search var</div>
      </div>
      <div className={cx("bottom")}>bottom</div>
    </div>
  );
};

export default NoticePresenter;
