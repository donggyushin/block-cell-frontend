import React, { Component } from "react";
import HomePresenter from "./homePresenter";
import { animateScroll } from "react-scroll";

class HomeContainer extends Component {
  render() {
    return (
      <HomePresenter
        scrollToCeoGreeting={this.scrollToCeoGreeting}
        scrollToHistory={this.scrollToHistory}
        scrollToVision={this.scrollToVision}
        scrollToPartnerShip={this.scrollToPartnerShip}
        scrollToTop={this.scrollToTop}
      />
    );
  }

  scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  scrollToPartnerShip = () => {
    animateScroll.scrollTo(5338, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  scrollToVision = () => {
    animateScroll.scrollTo(4020, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  scrollToCeoGreeting = () => {
    animateScroll.scrollTo(860, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  scrollToHistory = () => {
    animateScroll.scrollTo(2628, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };
}

export default HomeContainer;
