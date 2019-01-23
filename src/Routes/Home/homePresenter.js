import React from "react";
import styles from "./styles.module.scss";
import Carousel from "Components/Carousel/Carousel";
import NavVar from "Components/NavVar";
import classNames from "classnames/bind";
import BlueVar from "Components/BlueVar";
import IntroBlockCell from "Components/IntroBlockCell";
import IntroPresident from "Components/IntroPresident";
import BlockCellToken from "Components/BlockCellToken";
import CeoGreeting from "Components/CeoGreeting";
import FunnyLine from "Components/FunnyLine";
import History from "Components/History";
import Vision from "Components/Vision";
import PartnerShip from "Components/PartnerShip";
import CopyRight from "Components/CopyRight";

const cx = classNames.bind(styles);

const homePresenter = () => {
  return (
    <div className={cx("home")}>
      <div className={cx("nav-var")}>
        <NavVar />
      </div>
      <div className={cx("carousel")}>
        <Carousel height={550} />
      </div>
      <div className={cx("blue-var")}>
        <BlueVar />
      </div>

      <div className={cx("body")}>
        <div className={cx("ceo-greeting")}>
          <CeoGreeting />
        </div>
        <div className={cx("IntroBlockCell")}>
          <IntroBlockCell />
        </div>
        <div className={cx("IntroPresident")}>
          <IntroPresident />
        </div>
        <div className={cx("funny-line__under-IntroPresident")}>
          <FunnyLine />
        </div>
        <div className={cx("history")}>
          <History />
        </div>
        <div className={cx("vision")}>
          <Vision />
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("BlockCellToken")}>
          <BlockCellToken />
        </div>
        <div className={cx("partnership")}>
          <PartnerShip />
        </div>
      </div>
      <div className={cx("copyright")}>
        <CopyRight />
      </div>
    </div>
  );
};

export default homePresenter;
