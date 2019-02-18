import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarContainer from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/NoticeDetailComponents/BlockChainImage";
import CopyRight from "Components/CopyRight";
import ContentsFake1 from "Components/NoticeDetailFakeComponents/content1";

const cx = classNames.bind(styles);

const NoticeDetailPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-outer")}>
        <div className={cx("nav-var-container")}>
          <NavVarContainer />
        </div>
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
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

export default NoticeDetailPresenter;
