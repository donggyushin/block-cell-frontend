import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CopyRight = () => {
  return (
    <div className={cx("copy-right")}>
      <div className={cx("container")}>
        <div className={cx("text-container")}>
          <span>
            주식회사 블럭셀 | Tel. 02-561-3000 | E - mail. kovitech@naver.com |
            주소. 서울 강남구 테헤란로 146 현악빌딩 6층
          </span>
          <br />
        </div>
        <div className={cx("text-container")}>
          <span>COPYRIGHT &copy; BLOCKCELL. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
