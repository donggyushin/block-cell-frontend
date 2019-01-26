import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../../Routes/Home";
import IntroContainer from "../../Routes/Intro";
import BusinessContainer from "Routes/BusinessModel";
import WayToBlockCellContainer from "Routes/WayToBlockCell";
import RecruitContainer from "Routes/Recruit";
import NoticeContainer from "Routes/Notice";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const AppPresenter = () => {
  return (
    <Router>
      <div className={cx("container")}>
        <Route exact path={"/"} component={IntroContainer} />
        <Route exact path={"/about-us"} component={HomeContainer} />
        <Route exact path={"/business-model"} component={BusinessContainer} />
        <Route
          exact
          path={"/way-to-blockcell"}
          component={WayToBlockCellContainer}
        />
        <Route exact path={"/recruit"} component={RecruitContainer} />
        <Route exact path={"/notice"} component={NoticeContainer} />
      </div>
    </Router>
  );
};

export default AppPresenter;
