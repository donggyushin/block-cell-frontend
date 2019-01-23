import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CopyRight = () => {
  return (
    <div className={cx("copy-right")}>
      <span>&copy; BLOCKCELL</span>
    </div>
  );
};

export default CopyRight;
