import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import CopyRight from "Components/CopyRight";
import NavVar from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/NoticeComponents/BlockChainImage";
import Summernote from "Components/QNAwriter/Summernote";

const cx = classNames.bind(styles);

const QNAwriterPage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-container")}>
        <NavVar />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("body-container")}>
        <Summernote />
      </div>
      <div className={cx("bottom")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default QNAwriterPage;
