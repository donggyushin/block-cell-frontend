import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Modling = () => {
  return (
    <div className={cx("container")}>
      <img
        alt={"molding"}
        width={"100%"}
        height={"100%"}
        src={require("../../media/images/molding/molding.jpeg")}
      />
    </div>
  );
};

export default Modling;
