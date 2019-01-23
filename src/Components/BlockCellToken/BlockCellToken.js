import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const BlockCellToken = () => {
  return (
    <Fade bottom>
      <div className={cx("BlockCellToken")}>asd</div>
    </Fade>
  );
};

export default BlockCellToken;
