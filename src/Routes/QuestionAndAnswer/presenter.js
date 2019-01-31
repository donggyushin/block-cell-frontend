import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVarPresenter from "Components/NoticeComponents/NavVar";
import BlockchainImagePresenter from "Components/QuestionAndAnswerComponents/BlockChainImage";
import BulletinContainer from "Components/QuestionAndAnswerComponents/Bulletin";
import SearchVarContainer from "Components/QuestionAndAnswerComponents/SearchVar";
import CopyRight from "Components/CopyRight";
import BulletinNavigator from "Components/BulletinNavigator";

const cx = classNames.bind(styles);

const QuestionAndAnswer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar")}>
        <NavVarPresenter />
      </div>
      <div className={cx("blockchain-image-container")}>
        <BlockchainImagePresenter />
      </div>
      <div className={cx("navigator")}>
        <BulletinNavigator />
      </div>
      <div className={cx("body")}>
        <div className={cx("contents")}>
          <BulletinContainer />
        </div>
        <div className={cx("search-var")}>
          <SearchVarContainer />
        </div>
      </div>
      <div className={cx("copyright-container")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
