import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import IntroBlockCell from "Components/IntroBlockCell";
import IntroPresident from "Components/IntroPresident";
import BlockCellToken from "Components/BlockCellToken";
import CeoGreeting from "Components/CeoGreeting";
import FunnyLine from "Components/FunnyLine";
import History from "Components/History";
import Vision from "Components/Vision";
import PartnerShip from "Components/PartnerShip";
import CopyRight from "Components/CopyRight";
import ButtonToTop from "Components/ButtonToTop";
import BlockChainImage from "Components/AboutUsComponents/BlockChainImage";
import NavVar from "Components/AboutUsComponents/NavVar";

const cx = classNames.bind(styles);

const homePresenter = ({ scrollToTop }) => {
  return (
    <div className={cx("home")}>
      <div className={cx("navvar-container")}>
        <NavVar />
      </div>

      <div className={cx("blockchain-image-container")}>
        <BlockChainImage />
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
      <div className={cx("top-button")}>
        <ButtonToTop scrollToTop={scrollToTop} />
      </div>
    </div>
  );
};

export default homePresenter;
