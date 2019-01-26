import React from "react";
import NavVar from "./NavVar";
import { animateScroll as scroll } from "react-scroll";

class NavVarContainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    }
  };

  render() {
    return (
      <NavVar
        scrollToGreeting={this.scrollToGreeting}
        scrollToPresidentIntroduction={this.scrollToPresidentIntroduction}
        scrollToHistory={this.scrollToHistory}
        scrollToVision={this.scrollToVision}
        scrollToPartnership={this.scrollToPartnership}
      />
    );
  }

  scrollToGreeting = () => {
    scroll.scrollTo(610, this.state.scrollOptions);
  };

  scrollToPresidentIntroduction = () => {
    scroll.scrollTo(1587, this.state.scrollOptions);
  };

  scrollToHistory = () => {
    scroll.scrollTo(2362, this.state.scrollOptions);
  };

  scrollToVision = () => {
    scroll.scrollTo(3474, this.state.scrollOptions);
  };

  scrollToPartnership = () => {
    scroll.scrollTo(5198, this.state.scrollOptions);
  };
}

export default NavVarContainer;
