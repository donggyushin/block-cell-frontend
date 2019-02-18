import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Modal = ({ _onClickCloseButton }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("modal")}>
        <div className={cx("header")}>
          <span onClick={_onClickCloseButton}>CLOSE</span>
        </div>
        <div className={cx("body")}>
          <img
            alt={"과메기축제"}
            src={require("../../media/images/Modal/KakaoTalk_Photo_2019-02-15-14-52-11.jpeg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
