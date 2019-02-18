import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";
import BuildingImage from "../AboutUsComponents/BuildingImage";

const cx = classNames.bind(styles);

const IntroBlockCell = () => {
  return (
    <div className={cx("IntroBlockCell")}>
      <Fade bottom>
        <div>
          <img
            className={cx("introblockcell-image")}
            alt={"IntroBlockcell"}
            src={require("../../media/images/AboutUs/IntroBlockcell.png")}
          />
        </div>
        <img
          width={"200px"}
          alt={"blockcell logo"}
          src={require("../../media/images/AboutUs/IntroBlockcell/blockcell.png")}
        />
        <div className={cx("building-container")}>
          <div className={cx("building-inner-container")}>
            <BuildingImage />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default IntroBlockCell;
