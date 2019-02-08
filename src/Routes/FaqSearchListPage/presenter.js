import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import CopyRight from "Components/CopyRight";
import BlockChainImage from "Components/NoticeComponents/BlockChainImage";
import NavVar from "Components/NoticeComponents/NavVar";
import ContentsContainer from "Components/FaqSearchListComponents/contents";

const cx = classNames.bind(styles);

const FaqSearchListPage = () => {
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

export default FaqSearchListPage;
