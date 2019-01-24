import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavVar = ({
  scrollToCeoGreeting,
  scrollToHistory,
  scrollToVision,
  scrollToPartnerShip
}) => {
  return (
    <div className={cx("nav-var")}>
      <div className={cx("column")}>BLOCKCELL</div>
      <div className={cx("column")}>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              About us <i class="fas fa-caret-down" />
            </div>
            <div className={cx("menu")}>
              <span
                className={cx("menu-item")}
                onClick={() => {
                  scrollToCeoGreeting();
                }}
              >
                CEO 인삿말
              </span>

              <span className={cx("menu-item")} onClick={scrollToHistory}>
                연혁
              </span>
              <span onClick={scrollToVision} className={cx("menu-item")}>
                비전
              </span>
              <span onClick={scrollToPartnerShip} className={cx("menu-item")}>
                파트너사
              </span>
            </div>
          </span>
        </div>
        <div className={cx("item-container")}>
          <span className={cx("item")}>
            <div>
              사업모델 <i class="fas fa-caret-down" />
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
              오시는 길 <i class="fas fa-caret-down" />
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
              Recruit <i class="fas fa-caret-down" />
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
        <div className={cx("login-join")}>
          <span className={cx("login-join--item")}>로그인</span>|
          <span className={cx("login-join--item")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default NavVar;
