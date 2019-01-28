import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const cx = classNames.bind(styles);

const History = () => {
  return (
    <div className={cx("history")}>
      <Fade bottom>
        <div className={cx("header")}>
          <div className={cx("korean-title")}>
            <span>연혁</span>
          </div>
          <div className={cx("english-subtitle")}>
            <span>History</span>
          </div>
        </div>
      </Fade>
      <Slide left>
        <div className={cx("body")}>
          <img
            width={"100%"}
            alt={"history"}
            src={require("../../media/images/hisotry/history.png")}
          />
        </div>
      </Slide>

      <Fade bottom>
        <div className={cx("bottom")}>
          <div className={cx("column")}>
            <div className={cx("item", "left-item")}>
              <div className={cx("year")}>
                <span>2018</span>
              </div>
              <div className={cx("big")}>
                <span>· (주) 블럭셀 설립</span>
                <br />
                <br />
              </div>
              <div className={cx("small")}>
                <p>
                  - 부동산 자산 유동화 기초 기획
                  <br /> - 기초 전략사업 타당성 검토
                </p>
              </div>
              <br />
              <div className={cx("big")}>
                <span>· 게임개발 업체와 MOU체결</span>
              </div>
            </div>
          </div>
          <div className={cx("column")}>
            <div className={cx("item")}>
              <div className={cx("year")}>
                <span>2019 1Q</span>
              </div>
              <div className={cx("big")}>
                <span>· (주) 블록셀 법인등록</span>
              </div>
              <div className={cx("small")}>
                <p>
                  부동산 자산 유동화를 위한
                  <br /> 블록체인 기반의 부동산 플랫폼 개발 <br />
                  <br />- 총 7개 부분 <br />
                  시행 / 철거 / 분양 / 개발 /<br /> m&a / 부동산투자 / 게임개발
                  <br />
                  관련 사업 개발
                  <br />
                  <br />
                </p>
              </div>
              <div className={cx("big")}>
                <span>
                  · 글로벌 유저 대상 국제 거래소 <br /> &nbsp;&nbsp; 개발
                </span>
                <br />
                <br />
                <span>· 암호화폐 전문 은행 개발</span>
                <br />
                <br />
                <span>· MOU업체와 MOA작성 후 본격적 &nbsp;&nbsp;게임 개발</span>
              </div>
            </div>
          </div>
          <div className={cx("column")}>
            <div className={cx("item")}>
              <div className={cx("year")}>
                <span>2019 2Q</span>
              </div>
              <div className={cx("big")}>
                <span>
                  · 글로벌 유저 대상 국제 거래소 <br />
                  &nbsp;&nbsp; 오픈
                </span>
              </div>
              <div className={cx("year")}>
                <span>2019 3Q</span>
              </div>
              <div className={cx("big")}>
                <span>
                  · 블록체인 기반의 부동산 플랫폼 <br />
                  &nbsp;&nbsp;오픈
                  <br />
                  &nbsp;&nbsp;게임개발 BETA TEST
                </span>
              </div>
              <div className={cx("year")}>
                <span>2019 4Q</span>
              </div>
              <div className={cx("big")}>
                <span>
                  · 암호화폐 전문 은행 오픈
                  <br />
                  &nbsp;&nbsp;개발 게임 오픈
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default History;
