import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/NoticeComponents/BlockChainImage";
import CopyRight from "Components/CopyRight";
import ContentsContainer from "Components/QnaSearchListComponents/contents";

const cx = classNames.bind(styles);

const QnaSearchListPage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-container")}>
        <NavVar />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>
      <div className={cx("body-container")}>
        <ContentsContainer />
      </div>
      <div className={cx("building-image-container")}>
        <img
          alt={"building"}
          src={require("../../media/images/AboutUs/buildingImage.png")}
        />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default QnaSearchListPage;
