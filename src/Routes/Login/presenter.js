import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginPage = () => {
  return <div className={cx("container")}>login page</div>;
};

export default LoginPage;
