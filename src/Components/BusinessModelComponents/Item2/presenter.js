import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Item2 = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <img
          width={"100%"}
          alt={"back"}
          src={require("../../../media/images/businessmodel/sibal2.png")}
        />
      </div>
      <div className={cx("text")}>
        <span>
          부동산 사업 전반에 대한 개발 우수 사업지의 디벨로퍼서 당사투자자들의
          재산증식과
        </span>
        <span>
          자산보호 프로그램의 목적달성을 위하여 사업의 주체가 되어 직접적인
          투자주체의 역할을 수행
        </span>
        <br />
        <br />
        <span>
          당사주관의 각 개발사업 아이템은 개발 사업에 관한 전문 인력 및 투자,
          기술에 관한 자문단의 결정에 의하여
        </span>
        <span>
          법률, 개발 분석, 사업성과 분양성 검토, 감정평가, 가치평가를 통하여
          결정합니다.
        </span>
      </div>
    </div>
  );
};

export default Item2;
