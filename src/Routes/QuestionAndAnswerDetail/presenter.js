import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarPresenter from "Components/QuestionAndAnswerDetailComponents/NavVar";
import BlockChainImagePrenter from "Components/QuestionAndAnswerDetailComponents/BlockchainImage";
import ContentsContainer from "Components/QuestionAndAnswerDetailComponents/Contents";
import CopyRight from "Components/CopyRight";

const cx = classNames.bind(styles);

const QuestionAndAnswerDetail = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("nav-var-container")}>
        <NavVarPresenter />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockChainImagePrenter />
      </div>
      <div className={cx("contents-container")}>
        <ContentsContainer />
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default QuestionAndAnswerDetail;
