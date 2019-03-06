import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

import Item1 from "../Item1";
import Item2 from "../Item2";
import Item3 from "../Item3";
import Item4 from "../Item4";
import Item5 from "../Item5";
import TitlePresenter from "Components/Title";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("contents")}>
      <Fade bottom>
        <div className={cx("header")}>
          {/* <div className={cx("molding-container")}>
            <Molding />
          </div>
          <div className={cx("column", "title-kor")}>
            <span className={cx("header-title")}>사업모델</span>
          </div>
          <div className={cx("column", "title-eng")}>
            <span className={cx("header-title-eng")}>Business model</span>
          </div> */}
          <TitlePresenter title={"사업모델"} subTitle={"Business model"} />
        </div>
      </Fade>

      <div className={cx("body")}>
        <div className={cx("item-container")}>
          <Fade bottom>
            <Item1 />
          </Fade>
        </div>
        <div className={cx("item-container")}>
          <Fade bottom>
            <Item2 />
          </Fade>
        </div>
        <div className={cx("item-container")}>
          <Fade bottom>
            <Item3 />
          </Fade>
        </div>
        <div className={cx("item-container")}>
          <Fade bottom>
            <Item4 />
          </Fade>
        </div>
        <div className={cx("item-container")}>
          <Fade bottom>
            <Item5 />
          </Fade>
        </div>
      </div>
      <div className={cx("body-mobile")}>
        <div className={cx("item")}>
          <div className={cx("title")}>
            <span>1</span>
            금융상품 및 직접투자 방식
          </div>
          <div className={cx("contents")}>
            1) 당사 발행의 상품권(블럭셀)
            <br />
            <br />
            2) B.C.T 코인, 개발사업 보장성 코인
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("title")}>
            <span>2</span>
            부동산 개발 사업
          </div>
          <div className={cx("contents")}>
            부동산 사업 전반에 대한 개발 우수 사업지의 디벨로퍼로써
            당사투자자들의 재산증식과
            <br />
            <br />
            자산 보호 프로그램의 목적달성을 위하여 사업의 주체가 되어 직접적인
            투자주체의 역할을 수행
            <br />
            <br />
            <br />
            당사주관의 각 개발사업 아이템은 개발 사업에 관한 전문 인력 및 투자,
            기술에 관한 자문단의 결정에 의하여
            <br />
            <br />
            법률, 개발 분석, 사업성과 분양성 검토, 감정평가, 가치평가를 통하여
            결정합니다.
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("title")}>
            <span>3</span>
            개입 개발 사업 및 IT 관련 사업
          </div>
          <div className={cx("contents")}>
            1) 국내 게임전문 유명사와 공동개발 및 지분참여
            <br />
            <br />
            2) 국내외 전문 업체와 공동 진행 및 투자
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("title")}>
            <span>4</span>
            투자 대상 범위
          </div>
          <div className={cx("contents")}>
            1) 부동산 관련 개발사업의 전반
            <br />
            <br />
            2) 부동산 개발사업 관련 부대사업 일체 (철거, 분양, 건물관리 및
            임대사업, 대지조성사업 등)
            <br />
            <br />
            3) SOC 사업, BOT(BTO 사업 포함), PFV 사업, SPC 를 통한 사업 참여 등
            <br />
            <br />
            4) 해외 프로젝트 참여 (금융, 코인, 개발사업, 기타 우수사업 등)
            <br />
            <br />
            5) 파트너사 및 제휴사업자를 통한 간접투자사업 등
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("title")}>
            <span>5</span>
            파트너사 및 제휴 업무
          </div>
          <div className={cx("contents")}>
            - 일본 (주) 카르나 : 스위스 코인 거래소, 인도네시아 코인거래소 및
            폐이 사업,
            <br />
            <br />
            - 홍채보안 시스템사업 및 전자기기(홍채수첩, 보안시스템 설치 및 운영)
            세계 각 코인거래소 홍채보안 사업주관사
            <br />
            <br />
            <br />
            - (주) A. S. I : (주) 카르나와 이리언스 차이나 및 이리언스
            인도네시아와 홍채보안사업 진출
            <br />
            <br />- "아이 알" 코인 및 코인거래소, 개발사업 전문업체
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
