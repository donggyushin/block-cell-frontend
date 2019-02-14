import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import IntroBlockCell from "Components/IntroBlockCell";
import BlockCellToken from "Components/BlockCellToken";
import History from "Components/History";
import Vision from "Components/Vision";
import PartnerShip from "Components/PartnerShip";
import CopyRight from "Components/CopyRight";
import ButtonToTop from "Components/ButtonToTop";
import BlockChainImage from "Components/AboutUsComponents/BlockChainImage";
import NavVar from "Components/AboutUsComponents/NavVar";
import TitlePresenter from "Components/Title";
import BuildingImage from "Components/AboutUsComponents/BuildingImage";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const homePresenter = ({ scrollToTop }) => {
  return (
    <div className={cx("home")}>
      <div className={cx("navvar-outer")}>
        <div className={cx("navvar-container")}>
          <NavVar />
        </div>
      </div>

      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
      </div>

      <div className={cx("body")}>
        <Fade bottom>
          <div className={cx("ceo-greeting")}>
            <TitlePresenter title={"CEO 인사말"} subTitle={"CEO greeting"} />
          </div>
        </Fade>

        <div className={cx("IntroBlockCell")}>
          <IntroBlockCell />
        </div>

        {/* <div className={cx("funny-line__under-IntroPresident")}>
          <FunnyLine />
        </div> */}

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
          <div className={cx("building-image-container")}>
            <BuildingImage />
          </div>
        </div>
      </div>
      <div className={cx("copyright")}>
        <CopyRight />
      </div>
      <div className={cx("top-button")}>
        <ButtonToTop scrollToTop={scrollToTop} />
      </div>
    </div>
  );
};

export default homePresenter;
