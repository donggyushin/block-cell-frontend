import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BuildingImage = () => {
  return (
    <div className={cx("container")}>
      <img
        alt={"build"}
        src={require("../../../media/images/AboutUs/buildingImage.png")}
      />
    </div>
  );
};

export default BuildingImage;
