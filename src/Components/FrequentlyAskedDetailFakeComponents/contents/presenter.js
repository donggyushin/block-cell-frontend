import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";

const cx = classNames.bind(styles);

const ContentsPresenter = ({ goBack }) => {
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
          <span>블럭셀은 어떻게 오나요 ?</span>
        </div>
        <div className={cx("info")}>
          <div className={cx("column")}>
            <span className={cx("left")}>작성자</span>&nbsp;|&nbsp;
            <span className={cx("right")}>블럭셀</span>
          </div>
          <div className={cx("column")}>
            <span className={cx("left")}>작성일</span>&nbsp;|&nbsp;
            <span className={cx("right")}>2019-01-28</span>
          </div>
        </div>
        <div className={cx("contents")}>
          <p>
            주소 : 서울 강남구 테헤란로 146 현익빌딩 6층 (주) 블럭셀 역삼역 3번
            출구 신한은행건물 6층 연락처 : 02 - 561 - 3300
          </p>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("row")}>
          <div className={cx("column")}>
            <i class="fas fa-chevron-left" />
            &nbsp;
            <span>이전글</span>
          </div>
          <div className={cx("column")}>
            <span>다음글</span>
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
