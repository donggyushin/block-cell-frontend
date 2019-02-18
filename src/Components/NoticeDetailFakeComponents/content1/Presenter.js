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
          <span>블럭셀은 어떤 회사인가요 ?</span>
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
            BLOCK CELL은 아래와 같은 방법으로 기존 C2C 거래 금융이 가지고 있던
            문제를 해결함으로 안정적이고 효율적인 거래와 신속성을 극대화 할 것
            입니다. 실물경제에 기초한 부동산 자산 유동화를 위한 블록체인 기반의
            부동산 플랫폼을 고객에게 제공할 것입니다. 부동산 자산 운영에
            암호화화폐 C2C거래의 통화 가치성 보장과 안정화를 더하고 또한 C2C
            거래의 신속성과 환전의 신속성을 더하겠습니다. BLOCK CELL은 효율성 및
            투명성을 확보하고 암호화 화폐의 디지털 자산화를 구축합니다. BLOCK
            CELL의 자산가치와 동일하게 Fin-Tech API를 이용하여 해시값을 발생(BCT
            Mining)시켜 예치금의 투명성과 지속성을 유지하면서 그로 인한 가치
            상승을 시작하겠습니다.
          </p>
        </div>
      </div>
      <div className={cx("bottom")}>
        {/* <div className={cx("row")}>
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
        </div> */}
        <div className={cx("row")}>
          <button onClick={goBack}>목록</button>
        </div>
      </div>
    </div>
  );
};

export default ContentsPresenter;
