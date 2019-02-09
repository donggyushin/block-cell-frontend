import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginFormPresenter = ({
  username,
  password,
  handleChange,
  clickButton
}) => {
  return (
    <div className={cx("login-form")}>
      <div className={cx("title")}>
        <span>BLOCK CELL</span>
      </div>
      <div className={cx("input-container")}>
        <input
          placeholder={"Username"}
          onChange={handleChange}
          value={username}
          name={"username"}
          required={true}
        />
        <input
          placeholder={"Password"}
          onChange={handleChange}
          value={password}
          type={"password"}
          name={"password"}
          required={true}
        />
      </div>
      <div className={cx("button-container")}>
        <button onClick={clickButton}>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginFormPresenter;
