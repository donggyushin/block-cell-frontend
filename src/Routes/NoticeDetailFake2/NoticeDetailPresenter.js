import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarContainer from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/NoticeDetailComponents/BlockChainImage";
import CopyRight from "Components/CopyRight";
import ContentsFake2 from "Components/NoticeDetailFakeComponents/content2";

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
        <ContentsFake2 />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default NoticeDetailPresenter;
