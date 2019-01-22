import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavVar = () => {
  return <div className={cx("nav-var")}>Nav Var</div>;
};

export default NavVar;
