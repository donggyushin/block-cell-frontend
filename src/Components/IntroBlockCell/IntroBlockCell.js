import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const IntroBlockCell = () => {
  return (
    <Fade bottom>
      <div className={cx("IntroBlockCell")}>
        <div className={cx("column")}>
          <img
            alt={"BlockCell"}
            src={require("../../media/images/BlockCell.png")}
          />
        </div>
        <div className={cx("column")}>
          <div className={cx("row")}>
            <h1>(주) 블록셀</h1>
          </div>
          <div className={cx("row")}>
            <p>
              e jednostavno probni tekst koji se koristi u tiskarskoj i
              slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski
              standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo
              tiskarsku galiju slova i posložio ih da bi napravio knjigu s
              uzorkom tiska. Taj je tekst ne samo preživio pet stoljeća, već se
              i vinuo u svijet elektronskog slovoslagarstva, ostajući u suš
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IntroBlockCell;
