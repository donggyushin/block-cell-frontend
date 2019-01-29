import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import Molding from "Components/Molding";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("contents")}>
      <Fade bottom>
        <div className={cx("header")}>
          <div className={cx("molding-container")}>
            <Molding />
          </div>
          <div className={cx("column", "title-kor")}>
            <span className={cx("header-title")}>사업모델</span>
          </div>
          <div className={cx("column", "title-eng")}>
            <span className={cx("header-title-eng")}>Business model</span>
          </div>
        </div>
      </Fade>

      <div className={cx("body")}>
        <Fade bottom>
          <div className={cx("item")}>
            <div className={cx("item-header")}>
              <img
                alt={"title"}
                width={"100%"}
                src={require("../../../media/images/businessmodel/1.png")}
              />
              {/* <div className={cx("item-header-number")}>
                <span>1</span>
              </div>
              <div className={cx("item-header-title")}>
                <span>금융상품 및 직접투자 방식</span>
              </div> */}
            </div>
            <div className={cx("item-body")}>
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>1) 당사 발행의 상품권 (블럭 셀)</span>
                </div>
                <div className={cx("row")}>
                  <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={cx("item")}>
            <div className={cx("item-header")}>
              <img
                alt={"title"}
                width={"100%"}
                src={require("../../../media/images/businessmodel/2.png")}
              />
            </div>
            <div className={cx("item-body")}>
              {/* <div className={cx("background-image")} /> */}
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>
                    부동산 사업 전반에 대한 개발 우수 사업지의 디벨로퍼서
                    당사투자자들의 재산증식과
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>
                    자산보호 프로그램의 목적달성을 위하여 사업의 주체가 되어
                    직접적인 투자주체의 역할을 수행
                  </span>
                </div>
              </div>
            </div>
            <div className={cx("item-body")}>
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>
                    당사주관의 각 개발사업 아이템은 개발 사업에 관한 전문 인력
                    및 투자, 기술에 관한 자문단의 결정에 의하여
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>
                    법률, 개발 분석, 사업성과 분양성 검토, 감정평가, 가치평가를
                    통하여 결정합니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={cx("item")}>
            <div className={cx("item-header")}>
              <img
                alt={"title"}
                width={"100%"}
                src={require("../../../media/images/businessmodel/3.png")}
              />
            </div>

            <div className={cx("item-body")}>
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>

              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>-국내 게임전문 유명사와 공동개발 및 지분참여</span>
                </div>
                <div className={cx("row")}>
                  <span>-국내외 전문 업체와 공동 진행 및 투자</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={cx("item")}>
            <div className={cx("item-header")}>
              <img
                alt={"title"}
                width={"100%"}
                src={require("../../../media/images/businessmodel/4.png")}
              />
            </div>
            <div className={cx("item-body")}>
              {/* <div className={cx("background-image", "bigger")} /> */}
              <div className={cx("background-image2", "bigger")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/fat-backgroundimage.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>-부동산 관련 개발사업의 전반</span>
                </div>
                <div className={cx("row")}>
                  <span>
                    -부동산 개발사업 관련 부대사업 일체 (철거, 분양, 건물관리 및
                    임대사업, 대지조성사업 등)
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>
                    -SOC사업, BOT(BTO사업 포함), PFV사업, SPC를 통한 사업 참여
                    등
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>
                    -해외 프로젝트 참여 (금융, 코인, 개발사업, 기타 우수사업 등)
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>-파트너사 및 제휴사업자를 통한 간접투자사업 등</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={cx("item")}>
            <div className={cx("item-header")}>
              <img
                alt={"title"}
                width={"100%"}
                src={require("../../../media/images/businessmodel/5.png")}
              />
            </div>
            <div className={cx("item-body")}>
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>
                    일본 (주) 카르나 : 스위스 코인 거래소, 인도네시아
                    코인거래소 및 폐이 사업,
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>
                    홍채보안 시스템사업 및 전자기기(홍채수첩, 보안시스템 설치 및
                    운영) 세계 각 코인거래소 홍채보안 사업주관사
                  </span>
                </div>
              </div>
            </div>
            <div className={cx("item-body")}>
              <div className={cx("background-image2")}>
                <img
                  alt={"text-background"}
                  width={"100%"}
                  src={require("../../../media/images/businessmodel/whitebackground.png")}
                />
              </div>
              <div className={cx("item-body-text")}>
                <div className={cx("row")}>
                  <span>
                    (주) A. S. I : (주) 카르나와 이리언스 차이나 및 이리언스
                    인도네시아와 홍채보안사업 진출
                  </span>
                </div>
                <div className={cx("row")}>
                  <span>“아이 알”코인 및 코인거래소, 개발사업 전문업체</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contents;
