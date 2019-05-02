import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";
import styled from "styled-components";
import Colors from "../../../variables/Colors";
import Sizes from "../../../variables/Sizes";
import Weights from "../../../variables/Weights";

const cx = classNames.bind(styles);

const Text = styled.div`
  color: ${Colors.greyFontColor};
  font-size: ${Sizes.middleFontsize};
  font-weight: ${Weights.middleBold};
  margin-top: 30px;
`;

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("column-title-in-korean")}>
          <span>채용안내</span>
        </div>
        <div className={cx("column-title-in-eng")}>
          <span>Recruit</span>
        </div>
      </div>
      <div className={cx("body")}>
        <img
          alt={"contents"}
          width={"100%"}
          src={require("../../../media/images/recruit/recruitcontent.png")}
        />
        <Text>- 채용관련 문의 : kovitech@naver.com</Text>
      </div>
      <div className={cx("only-mobild")}>
        <Text>- 채용관련 문의 : kovitech@naver.com</Text>
      </div>
    </div>
  );
};

export default Contents;
