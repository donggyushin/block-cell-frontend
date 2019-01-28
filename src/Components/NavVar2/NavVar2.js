import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const NavVar2 = () => {
  return (
    <div className={cx("nav-var")}>
      <div className={cx("column", "blockcell-logo-container")}>
        <img
          alt={"blockcell-logo"}
          width={"100%"}
          src={require("../../media/images/navvar/blockcelllogo.png")}
        />
      </div>
      <div className={cx("column")}>
        <div className={cx("item-container")}>
          <Link to={"/about-us"} style={{ textDecoration: "none" }}>
            <span className={cx("item")}>
              <div>
                블럭셀은? <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
        </div>
        <div className={cx("item-container")}>
          <Link to={"/business-model"} style={{ textDecoration: "none" }}>
            <span className={cx("item")}>
              <div>
                사업모델 <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
        </div>
        <div className={cx("item-container")}>
          <Link to={"/notice"} style={{ textDecoration: "none" }}>
            <span className={cx("item")}>
              <div>
                공지사항 <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
        </div>
        <div className={cx("item-container")}>
          <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}>
            <span className={cx("item")}>
              <div>
                오시는 길 <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              <Link to={"/recruit"} style={{ textDecoration: "none" }}>
                <span className={cx("span-in-link")}>
                  채용안내 <i class="fas fa-caret-down" />
                </span>
              </Link>
            </div>
          </span>
        </div>
        <div className={cx("login-join")}>
          <span className={cx("login-join--item")}>로그인</span>|
          <span className={cx("login-join--item")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default NavVar2;
