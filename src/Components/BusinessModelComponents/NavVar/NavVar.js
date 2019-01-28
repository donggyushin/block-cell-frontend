import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const NavVar = ({
  toFirstItem,
  toSecondItem,
  toThirdItem,
  toFourthItem,
  toFifthItem
}) => {
  return (
    <div className={cx("nav-var")}>
      <div className={cx("column")}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
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
        <div className={cx("item-container")}>
          <Link to={"/about-us"} style={{ textDecoration: "none" }}>
            <span className={cx("item", "testtest")}>
              <div>
                블럭셀은? <i class="fas fa-caret-down" />
              </div>
            </span>
          </Link>
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
