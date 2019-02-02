import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NewAccountPage = () => {
  return <div className={cx("container")}>New Account</div>;
};

export default NewAccountPage;
