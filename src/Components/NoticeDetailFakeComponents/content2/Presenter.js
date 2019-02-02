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
          <span>공지사항</span>
        </div>
        <div className={cx("english")}>
          <span>Notice</span>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>주력 사업은 무엇인가요 ?</span>
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
            투자 대상 범위-부동산 관련 개발사업의 전반 -부동산 개발사업 관련
            부대사업 일체 (철거, 분양, 건물관리 및 임대사업, 대지조성사업 등)
            -SOC사업, BOT(BTO사업 포함), PFV사업, SPC를 통한 사업 참여 등 -해외
            프로젝트 참여 (금융, 코인, 개발사업, 기타 우수사업 등) -파트너사 및
            제휴사업자를 통한 간접투자사업 등
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
