import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

import TitlePresenter from "../Title";

const cx = classNames.bind(styles);

const PartnerShip = () => {
  return (
    <Fade bottom>
      <div className={cx("partnership")}>
        <div className={cx("header")}>
          {/* <div className={cx("molding-container")}>
            <Molding />
          </div>
          <div className={cx("korean-title")}>
            <span>파트너사</span>
          </div>
          <div className={cx("english-subtitle")}>
            <span>Partner ship</span>
          </div> */}
          <TitlePresenter title={"파트너사"} subTitle={"Partnetship"} />
        </div>
        <div className={cx("bottom")}>
          <div className={cx("partner-box")}>
            <div className={cx("partner-image")}>
              <img
                width={"140"}
                alt={"partner"}
                src={
                  "https://cdn.shopify.com/s/files/1/2292/0133/collections/kitty-kat_dad318c1-0813-4e4a-ae11-56ec011a14dc_1024x.png?v=1503712236"
                }
              />
            </div>
            <div className={cx("partner")}>
              <div className={cx("little-text")}>
                <span>blockcell is</span>
              </div>
              <div className={cx("big-text")}>
                <span>blockcell</span>
              </div>
              <div className={cx("line__container")}>
                <div className={cx("thin-line")} />
              </div>
            </div>
            <div className={cx("partner-info")}>
              <p>
                금주법이 시행되고 재즈가 유행하던 1920년대 미국 뉴욕을 배경으로
                하는 소설로 제1차 세계대전의 승리 이후 물질적으로는 엄청난
                풍요를 누리게 되었지만 도덕적, 윤리적으로는 타락한 미국 사회의
              </p>
            </div>
          </div>
          <div className={cx("partner-box")}>
            <div className={cx("partner-image")}>
              <img
                width={"140"}
                alt={"partner"}
                src={
                  "https://cdn.shopify.com/s/files/1/2292/0133/collections/kitty-kat_dad318c1-0813-4e4a-ae11-56ec011a14dc_1024x.png?v=1503712236"
                }
              />
            </div>
            <div className={cx("partner")}>
              <div className={cx("little-text")}>
                <span>blockcell is</span>
              </div>
              <div className={cx("big-text")}>
                <span>blockcell</span>
              </div>
              <div className={cx("line__container")}>
                <div className={cx("thin-line")} />
              </div>
            </div>
            <div className={cx("partner-info")}>
              <p>
                금주법이 시행되고 재즈가 유행하던 1920년대 미국 뉴욕을 배경으로
                하는 소설로 제1차 세계대전의 승리 이후 물질적으로는 엄청난
                풍요를 누리게 되었지만 도덕적, 윤리적으로는 타락한 미국 사회의
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PartnerShip;
