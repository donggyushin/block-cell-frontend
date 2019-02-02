import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/NoticeComponents/BlockChainImage";
import Summernote from "Components/NoticeWriter/Summernote";

const cx = classNames.bind(styles);

const NoticeWriter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-container")}>
        <NavVar />
      </div>
      <div className={cx("blockchainimage-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("summernote-container")}>
        <Summernote />
      </div>
    </div>
  );
};

export default NoticeWriter;
