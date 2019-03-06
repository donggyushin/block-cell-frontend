import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import BuildingImage from "../AboutUsComponents/BuildingImage";

const cx = classNames.bind(styles);

const IntroBlockCell = () => {
  return (
    <div className={cx("IntroBlockCell")}>
      <Fade bottom>
        {/* <div>
          <img
            className={cx("introblockcell-image")}
            alt={"IntroBlockcell"}
            src={require("../../media/images/AboutUs/IntroBlockcell.png")}
          />
        </div> */}
        <div className={cx("ceo-greeting")}>
          <span>( 주 ) 블럭셀을 방문해주셔서 감사합니다. </span>
          <p>
            현재 우리의 글로벌 금융 시스템은 하루에 수 조 달러를 움직이고 수십억
            명의 사람들에게 서비스를 제공합니다. <br />
            또한 규제 비용이 지속적으로 증가하고 금융기관들에게 최고의 관심사로
            남아 있다는 것은 놀라운 일이 아닙니다. <br />
            이 모든 것은 비용을 증가시켜 궁극적으로 부담을 안겨주고 있으며 금융
            블록 체인은 JP 모건 체이스, 씨티그룹, 그레디트 스위스와 <br />
            같은 금융기관들이 현재 투자하고 있으며, 적은 비용으로 더 많은 일을
            하고 비즈니스를 간소화하며 프로세스의 위험을 감소시키기 <br />
            위해 노력하고 있습니다. <br />
            <br />
            <br />
            하지만 현재의 금융 블록 체인 산업 환경은 그러한 문제점을
            해결하기에는 역부족입니다. 결국 구조가 근본적으로 바뀐 비지니스 또는
            <br />
            시장에서는 어떤 방법으로 비용 절감이 가능 할까요?
            <br />
            <br />
            <br />
            진정한 해결책은 바로 실물경제에 기초해 부동산 자산 유동화를 위한
            블록체인 기반의 부동산 플랫폼입니다. 제4차 산업 혁명을 이끌어
            <br />
            갈 C2C 금융 시장에서 통화 가치의 상승과 통화량의 증대를 통해
            참여자들 모두에 신뢰 형성과 합리적 가격으로 거래의 기회를
            <br />
            제공하는 것입니다. 이를 위하여 BLOCK CELL은 다음과 같은 조건을
            충족시키는 소비자간의 금융 생태계를 구현하고자 합니다. <br />
            <br />
            <br />
            함께 걸어가겠습니다
          </p>
        </div>
        <img
          width={"200px"}
          alt={"blockcell logo"}
          src={require("../../media/images/AboutUs/IntroBlockcell/blockcell.png")}
        />
        <div className={cx("building-container")}>
          <div className={cx("building-inner-container")}>
            <BuildingImage />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default IntroBlockCell;
