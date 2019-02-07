import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NavVar2 from "Components/NavVar2/NavVar2";
import LoginFormContainer from "Components/LoginComponents/LoginForm";

const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("background-image")} />
      <div className={cx("navvar-container")}>
        <NavVar2 />
      </div>
      <div className={cx("body")}>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
