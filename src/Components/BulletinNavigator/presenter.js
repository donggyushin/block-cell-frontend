import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const BulletinNavigator = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("column")}>
        <Link to={"/notice"} style={{ textDecoration: "none" }}>
          <span>공지사항</span>
        </Link>
      </div>
      <span>|</span>
      <div className={cx("column", "center")}>
        <Link to={"/frequently-asked"} style={{ textDecoration: "none" }}>
          <span>자주 묻는 질문</span>
        </Link>
      </div>
      <span>|</span>
      <div className={cx("column")}>
        <Link to={"/question&answer"} style={{ textDecoration: "none" }}>
          <span>묻고 답하기</span>
        </Link>
      </div>
    </div>
  );
};

export default BulletinNavigator;
