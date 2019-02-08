import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const BulletinNavigator = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("column")}>
          <Link to={"/notice/1"} style={{ textDecoration: "none" }}>
            <span>공지사항</span>
          </Link>

          <div className={cx("under-line")} />
        </div>
        <span>|</span>
        <div className={cx("column", "center")}>
          <Link to={"/frequently-asked/1"} style={{ textDecoration: "none" }}>
            <span>자주 묻는 질문</span>
          </Link>

          <div className={cx("under-line")} />
        </div>
        <span>|</span>
        <div className={cx("column")}>
          <Link to={"/question&answer/1"} style={{ textDecoration: "none" }}>
            <span>묻고 답하기</span>
          </Link>

          <div className={cx("under-line")} />
        </div>
      </div>
    </div>
  );
};

export default BulletinNavigator;
