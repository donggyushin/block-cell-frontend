import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarContainer from "Components/NoticeDetailComponents/NavVar";
import BlockChainImage from "Components/NoticeDetailComponents/BlockChainImage";
import Contents from "Components/NoticeDetailComponents/Contents";
import CopyRight from "Components/CopyRight";

const cx = classNames.bind(styles);

const NoticeDetailPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("nav-var-container")}>
        <NavVarContainer />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("contents-container")}>
        <Contents />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default NoticeDetailPresenter;
