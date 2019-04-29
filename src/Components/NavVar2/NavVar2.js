import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const NavVar2 = ({
  isLoggedIn,
  onClickLogoutSpan,
  clickMenuIcon,
  visiable
}) => {
  return (
    <div className={cx("nav-var")}>
      <div className={cx("column-outer")}>
        <div className={cx("column", "blockcell-logo-container")}>
          <Link
            to={"/"}
            className={cx("link")}
            style={{ textDecoration: "none" }}
          >
            <img
              alt={"blockcell-logo"}
              width={"100%"}
              src={require("../../media/images/navvar/blockcelllogo.png")}
            />
          </Link>
        </div>
        <div className={cx("column")}>
          <div className={cx("item-container-container")}>
            <div className={cx("item-container")}>
              {/* <Link to={"/about-us"} style={{ textDecoration: "none" }}> */}
              <span className={cx("item")}>
                <div>
                  코비텍이란? <i class="fas fa-caret-down" />
                </div>
              </span>
              {/* </Link> */}
            </div>
            <div className={cx("item-container")}>
              {/* <Link to={"/business-model"} style={{ textDecoration: "none" }}> */}
              <span className={cx("item")}>
                <div>
                  사업모델 <i class="fas fa-caret-down" />
                </div>
              </span>
              {/* </Link> */}
            </div>
            <div className={cx("item-container")}>
              <Link to={"/notice/1"} style={{ textDecoration: "none" }}>
                <span className={cx("item")}>
                  <div>고객지원</div>
                </span>
              </Link>
            </div>
            <div className={cx("item-container")}>
              <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}>
                <span className={cx("item")}>
                  <div>오시는 길</div>
                </span>
              </Link>
            </div>
            <div className={cx("item-container")}>
              <span className={cx("item")}>
                <div>
                  <Link to={"/recruit"} style={{ textDecoration: "none" }}>
                    <span className={cx("span-in-link")}>채용안내</span>
                  </Link>
                </div>
              </span>
            </div>
          </div>
          <div className={cx("login-join")}>
            {isLoggedIn ? (
              <span
                className={cx("login-join--item", "span-in-link")}
                onClick={onClickLogoutSpan}
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
          className={
            visiable ? cx("hidden-menu-var", "visiable") : cx("hidden-menu-var")
          }
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

export default NavVar2;
