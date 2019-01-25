import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const NavVar = () => {
  return (
    <div className={cx("nav-var")}>
      <div className={cx("column")}>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <span className={cx("blockcell-font")}>BLOCKCELL</span>
        </Link>
      </div>

      <div className={cx("column")}>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                <span className={cx("span-in-link")}>
                  About us <i class="fas fa-caret-down" />
                </span>
              </Link>
            </div>
            {/* <div className={cx("menu")}>
              <span className={cx("menu-item")}>CEO 인삿말</span>

              <span className={cx("menu-item")}>연혁</span>
              <span className={cx("menu-item")}>비전</span>
              <span className={cx("menu-item")}>파트너사</span>
            </div> */}
          </span>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              <Link style={{ textDecoration: "none" }} to={"/business-model"}>
                <span className={cx("span-in-link")}>
                  사업모델 <i class="fas fa-caret-down" />
                </span>
              </Link>
            </div>
            <div className={cx("menu")}>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
            </div>
          </span>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              공지사항 <i class="fas fa-caret-down" />
            </div>
            {/* <div className={cx("menu")}>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
            </div> */}
          </span>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              <Link to={"/way-to-blockcell"} style={{ textDecoration: "none" }}>
                <span className={cx("span-in-link")}>
                  오시는 길 <i class="fas fa-caret-down" />
                </span>
              </Link>
            </div>

            {/* <div className={cx("menu")}>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
            </div> */}
          </span>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              <Link to={"/recruit"} style={{ textDecoration: "none" }}>
                <span className={cx("span-in-link")}>
                  Recruit <i class="fas fa-caret-down" />
                </span>
              </Link>
            </div>
            {/* <div className={cx("menu")}>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
              <span className={cx("menu-item")}>Item</span>
            </div> */}
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

export default NavVar;
