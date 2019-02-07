import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Modal from "react-responsive-modal";

const cx = classNames.bind(styles);

const LoginFormPresenter = ({
  username,
  password1,
  password2,
  handleChange,
  clickButton,
  open,
  onOpenModal,
  onCloseModal
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
        />
        <input
          placeholder={"Password"}
          onChange={handleChange}
          value={password1}
          type={"password"}
          name={"password1"}
        />
        <input
          placeholder={"동일한 password를 입력해주세요. "}
          onChange={handleChange}
          value={password2}
          type={"password"}
          name={"password2"}
        />
      </div>
      <div className={cx("button-container")}>
        <button onClick={clickButton}>SUBMIT</button>
      </div>
      <ResponsiveModal
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

const ResponsiveModal = ({ open, onOpenModal, onCloseModal }) => {
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>BLOCK CELL</h2>
        <p className={cx("p-in-modal")}>
          동일한 비밀번호를 입력하셨나요? 비밀번호를 다시 한 번 확인해주세요.{" "}
        </p>
      </Modal>
    </div>
  );
};

export default LoginFormPresenter;
