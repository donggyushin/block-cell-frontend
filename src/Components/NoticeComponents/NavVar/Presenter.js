import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const Presenter = ({
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
                width={"60%"}
                src={require("../../../media/images/navvar/blockcelllogo.png")}
              />
            </span>
          </Link>
        </div>
        <div className={cx("column")}>
          <div className={cx("item-container-container")}>
            <div className={cx("item-container")}>
              {/* <Link to={"/about-us"} style={{ textDecoration: "none" }}> */}
              <span className={cx("item", "testtest")}>
                <div>
                  코비텍은? <i class="fas fa-caret-down" />
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
                onClick={onClickLogoutSpan}
                className={cx("login-join--item", "span-in-link")}
              >
                로그아웃
              </span>
            ) : (
              <div>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <span className={cx("login-join--item", "span-in-link")}>
                    로그인 |&nbsp;
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
          <div className={cx("menu-container")}>
            <Link to={"/about-us"} style={{ textDecoration: "none" }}>
              <span className={cx("item", "testtest")}>
                <div>
                  블럭셀은? <i class="fas fa-caret-down" />
                </div>
              </span>
            </Link>
          </div>
          <div className={cx("menu-container")}>
            <Link to={"/business-model"} style={{ textDecoration: "none" }}>
              <span className={cx("item")}>
                <div>
                  사업모델 <i class="fas fa-caret-down" />
                </div>
              </span>
            </Link>
          </div>
          <div className={cx("menu-container")}>
            <Link to={"/notice/1"} style={{ textDecoration: "none" }}>
              <span className={cx("item")}>
                <div>고객지원</div>
              </span>
            </Link>
          </div>
          <div className={cx("menu-container")}>
            <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}>
              <span className={cx("item")}>
                <div>오시는 길</div>
              </span>
            </Link>
          </div>
          <div className={cx("menu-container")}>
            <Link to={"/recruit"} style={{ textDecoration: "none" }}>
              <span className={cx("span-in-link")}>채용안내</span>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Presenter;
