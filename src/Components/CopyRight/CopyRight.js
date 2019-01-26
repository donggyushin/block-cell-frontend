import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CopyRight = () => {
  return (
    <div className={cx("copy-right")}>
      <span>COPYRIGHT &copy; BLOCKCELL. ALL RIGHTS RESERVED</span>
    </div>
  );
};

export default CopyRight;
