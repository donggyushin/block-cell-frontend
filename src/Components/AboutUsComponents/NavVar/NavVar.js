import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const NavVar = ({
  scrollToGreeting,
  scrollToHistory,
  scrollToVision,
  scrollToPartnership,
  top,
  isLoggedIn,
  onClickLogoutSpan,
  clickListIcon,
  visiable
}) => {
  return (
    <div className={cx("nav-var", !top && "has-background")}>
      <div className={cx("column-outer")}>
        <div className={cx("column", "img-container")}>
          <Link
            to={"/"}
            className={cx("link")}
            style={{ textDecoration: "none" }}
          >
            <span className={cx("span-in-link")}>
              <img
                alt={"blockcell logo"}
                width={"100%"}
                src={require("../../../media/images/navvar/blockcelllogo.png")}
              />
            </span>
          </Link>
        </div>
        <div className={cx("column")}>
          <div className={cx("item-container-container")}>
            <div className={cx("item-container")}>
              <span className={cx("item", "testtest")}>
                <div>
                  코비텍은? <i class="fas fa-caret-down" />
                </div>
                <div className={cx("dropdown-container")}>
                  <DropDownItems
                    scrollToGreeting={scrollToGreeting}
                    scrollToHistory={scrollToHistory}
                    scrollToVision={scrollToVision}
                    scrollToPartnership={scrollToPartnership}
                  />
                </div>
              </span>
            </div>
            <div className={cx("item-container")}>
              {/* <Link to={"/business-model"} style={{ textDecoration: "none" }}> */}
              {/* <a href={"/business-model"}> */}
              <span className={cx("item")}>
                <div>
                  사업모델 <i class="fas fa-caret-down" />
                </div>
              </span>
              {/* </a> */}
              {/* </Link> */}
            </div>
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
          <i onClick={clickListIcon} class="fas fa-list" />
        </div>
      </div>
      <Fade top>
        <div
          className={cx(
            "hidden-menu-var",
            top && "has-no-background",
            visiable && "visiable"
          )}
        >
          <Link to={"/about-us"} style={{ textDecoration: "none" }}>
            <span>블럭셀은?</span>
          </Link>
          <Link to={"/business-model"} style={{ textDecoration: "none" }}>
            <span>사업모델</span>
          </Link>
          <Link to={"/notice/1"} style={{ textDecoration: "none" }}>
            <span>고객지원</span>
          </Link>
          <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}>
            <span>오시는 길</span>
          </Link>
          <Link to={"/recruit"} style={{ textDecoration: "none" }}>
            <span>채용안내</span>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

const DropDownItems = ({
  scrollToGreeting,
  scrollToHistory,
  scrollToVision,
  scrollToPartnership
}) => {
  return (
    <div className={cx("dropdownitems-container")}>
      <span onClick={scrollToGreeting}>인삿말</span>
      <span onClick={scrollToHistory}>연혁</span>
      <span onClick={scrollToVision}>비전</span>
      <span onClick={scrollToPartnership}>파트너사</span>
    </div>
  );
};

export default NavVar;
