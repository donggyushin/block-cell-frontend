import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const NavVar = ({
  toFirstItem,
  toSecondItem,
  toThirdItem,
  toFourthItem,
  toFifthItem,
  top,
  isLoggedIn,
  onClickLogoutSpan,
  clickMenuIcon,
  visiable
}) => {
  return (
    <div className={cx("nav-var", !top && "has-background")}>
      <div className={cx("column-outer")}>
        <div className={cx("column", "img-container")}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span className={cx("span-in-link")}>
              <img
                alt={"blockcell logo"}
                width={"230px"}
                src={require("../../../media/images/navvar/blockcelllogo.png")}
              />
            </span>
          </Link>
        </div>
        <div className={cx("column")}>
          <div className={cx("item-container-container")}>
            <div className={cx("item-container")}>
              {/* <Link to={"/about-us"} style={{ textDecoration: "none" }}> */}
              <a href={"/about-us"}>
                <span className={cx("item", "testtest")}>
                  <div>
                    코비텍은? <i class="fas fa-caret-down" />
                  </div>
                </span>
              </a>
              {/* </Link> */}
            </div>
            <div className={cx("item-container")}>
              <span className={cx("item", "testtest")}>
                <div>
                  사업모델 <i class="fas fa-caret-down" />
                </div>
                <div className={cx("dropdown-container")}>
                  <DropDownItems
                    toFirstItem={toFirstItem}
                    toSecondItem={toSecondItem}
                    toThirdItem={toThirdItem}
                    toFourthItem={toFourthItem}
                    toFifthItem={toFifthItem}
                  />
                </div>
              </span>
            </div>
            {/* <div className={cx("item-container")}>
          <Link to={"/business-model"} style={{ textDecoration: "none" }}>
            <span className={cx("item")}>
              <div>
                사업모델 <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
        </div> */}
            <div className={cx("item-container")}>
              {/* <Link to={"/notice"} style={{ textDecoration: "none" }}> */}
              <a href={"/notice/1"}>
                <span className={cx("item")}>
                  <div>고객지원</div>
                </span>
              </a>
              {/* </Link> */}
            </div>
            <div className={cx("item-container")}>
              {/* <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}> */}
              <a href={"/way-to-blockcell"}>
                <span className={cx("item")}>
                  <div>오시는 길</div>
                </span>
              </a>
              {/* </Link> */}
            </div>
            <div className={cx("item-container")}>
              <span className={cx("item")}>
                <div>
                  {/* <Link to={"/recruit"} style={{ textDecoration: "none" }}> */}
                  <a href={"/recruit"}>
                    <span className={cx("span-in-link")}>채용안내</span>
                  </a>
                  {/* </Link> */}
                </div>
              </span>
            </div>
          </div>

          <div className={cx("login-join")}>
            {isLoggedIn ? (
              <span
                onClick={onClickLogoutSpan}
                className={cx("login-join--item", "span-in-link")}
              >
                로그아웃
              </span>
            ) : (
              <div>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <span className={cx("login-join--item", "span-in-link")}>
                    로그인 |{" "}
                  </span>
                </Link>
                <Link to={"/new-account"} style={{ textDecoration: "none" }}>
                  <span className={cx("login-join--item", "span-in-link")}>
                    회원가입
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={cx("column")}>
          <i onClick={clickMenuIcon} class="fas fa-list" />
        </div>
      </div>
      <Fade top>
        <div
          className={cx(
            "hidden-menu-bar",
            !top && "has-background",
            visiable && "visiable"
          )}
        >
          <a href={"/about-us"}>
            <span className={cx("item", "testtest")}>
              <div>
                블럭셀은? <i class="fas fa-caret-down" />
              </div>
            </span>
          </a>
          <span className={cx("item", "testtest")}>
            <div>
              사업모델 <i class="fas fa-caret-down" />
            </div>
            <div className={cx("dropdown-container")}>
              <DropDownItems
                toFirstItem={toFirstItem}
                toSecondItem={toSecondItem}
                toThirdItem={toThirdItem}
                toFourthItem={toFourthItem}
                toFifthItem={toFifthItem}
              />
            </div>
          </span>
          <a href={"/notice/1"}>
            <span className={cx("item")}>
              <div>고객지원</div>
            </span>
          </a>
          <a href={"/way-to-blockcell"}>
            <span className={cx("item")}>
              <div>오시는 길</div>
            </span>
          </a>
          <a href={"/recruit"}>
            <span className={cx("span-in-link")}>채용안내</span>
          </a>
        </div>
      </Fade>
    </div>
  );
};

const DropDownItems = ({
  toFirstItem,
  toSecondItem,
  toThirdItem,
  toFourthItem,
  toFifthItem
}) => {
  return (
    <div className={cx("dropdownitems-container")}>
      <span onClick={toFirstItem}>금융상품 및 직접투자 방식</span>
      <span onClick={toSecondItem}>부동산 개발 사업</span>
      <span onClick={toThirdItem}>개입 개발 사업 및 IT 관련 사업</span>
      <span onClick={toFourthItem}>투자 대상 범위</span>
      <span onClick={toFifthItem}>파트너사 및 제휴 업무</span>
    </div>
  );
};

export default NavVar;
