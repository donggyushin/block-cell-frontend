import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../../Routes/Home";

const AppPresenter = () => {
  return (
    <Router>
      <div>
        <Route path={"/"} component={HomeContainer} />
      </div>
    </Router>
  );
};

export default AppPresenter;
