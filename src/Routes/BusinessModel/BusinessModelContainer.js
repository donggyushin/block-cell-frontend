import React from "react";
import BusinessModelPresenter from "./BusinessModelPresenter";
import { animateScroll } from "react-scroll";

class BusinessModelContainer extends React.Component {
  componentDidMount() {
    animateScroll.scrollToTop();
  }
  render() {
    return <BusinessModelPresenter />;
  }
}

export default BusinessModelContainer;
