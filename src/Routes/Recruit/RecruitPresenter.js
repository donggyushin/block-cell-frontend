import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar from "Components/NoticeComponents/NavVar";
import BlockChainImage from "Components/RecruitComponents/BlockChainImage";
import Contents from "Components/RecruitComponents/Contents";
import CopyRight from "Components/CopyRight";

const cx = classNames.bind(styles);

const RecruitPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar")}>
        <NavVar />
      </div>
      <div className={cx("blockchain-image")}>
        <BlockChainImage />
      </div>
      <div className={cx("contents")}>
        <Contents />
      </div>
      <div className={cx("building-image-container")}>
        <img
          alt={"building"}
          src={require("../../media/images/AboutUs/buildingImage.png")}
        />
      </div>
      <div className={cx("bottom")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default RecruitPresenter;
