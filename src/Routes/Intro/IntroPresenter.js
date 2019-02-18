import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Carousel2 from "../../Components/Carousel2";
import NavVar2 from "../../Components/NavVar2";
import CopyRight from "../../Components/CopyRight";
import Modal from "Components/Modal";

const cx = classNames.bind(styles);

const IntroPresenter = ({ _onClickCloseButton, modal }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("container-body")}>
        <div className={cx("nav-var-outer")}>
          <div className={cx("nav-var")}>
            <NavVar2 />
          </div>
        </div>
        <Carousel2 />
      </div>
      <div className={cx("container-bottom")}>
        <CopyRight />
      </div>
      {modal && (
        <div className={cx("modal-container")}>
          <Modal _onClickCloseButton={_onClickCloseButton} />
        </div>
      )}
    </div>
  );
};

export default IntroPresenter;
