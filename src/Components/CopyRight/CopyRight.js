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
            주식회사 코비텍 | Tel. 010-3044-7128 | E - mail. kovitech@naver.com
            | 주소. 서울 강남구 논현로 72길 16 4층
          </span>
          <br />
        </div>
        <div className={cx("text-container")}>
          <span>COPYRIGHT &copy; KOVITECH. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
