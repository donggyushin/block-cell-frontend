import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";
import ReactHtmlParser from "react-html-parser";

const cx = classNames.bind(styles);

const ContentsPresenter = ({
  goBack,
  faq,
  _onClickNextButton,
  _onClickPreviousButton
}) => {
  const contents = ReactHtmlParser(faq.contents);
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("korean")}>
          <span>자주 묻는 질문</span>
        </div>
        <div className={cx("english")}>
          <span>FAQ</span>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>{faq.title}</span>
        </div>
        <div className={cx("info")}>
          <div className={cx("column")}>
            <span className={cx("left")}>작성자</span>&nbsp;|&nbsp;
            <span className={cx("right")}>{faq.user.username}</span>
          </div>
          <div className={cx("column")}>
            <span className={cx("left")}>작성일</span>&nbsp;|&nbsp;
            <span className={cx("right")}>
              {faq.updatedAt.substring(0, 10)}
            </span>
          </div>
        </div>
        <div className={cx("contents")}>
          <p>{contents}</p>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("row")}>
          <div className={cx("column")}>
            <i class="fas fa-chevron-left" />
            &nbsp;
            <span onClick={_onClickPreviousButton}>이전글</span>
          </div>
          <div className={cx("column")}>
            <span onClick={_onClickNextButton}>다음글</span>
            &nbsp;
            <i class="fas fa-chevron-right" />
          </div>
        </div>
        <div className={cx("row")}>
          <button onClick={goBack}>목록</button>
        </div>
      </div>
    </div>
  );
};

export default ContentsPresenter;
