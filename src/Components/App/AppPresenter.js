import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../../Routes/Home";
import IntroContainer from "../../Routes/Intro";
import BusinessContainer from "Routes/BusinessModel";
import WayToBlockCellContainer from "Routes/WayToBlockCell";

const AppPresenter = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/"} component={IntroContainer} />
        <Route exact path={"/about-us"} component={HomeContainer} />
        <Route exact path={"/business-model"} component={BusinessContainer} />
        <Route
          exact
          path={"/way-to-blockcell"}
          component={WayToBlockCellContainer}
        />
      </div>
    </Router>
  );
};

export default AppPresenter;
