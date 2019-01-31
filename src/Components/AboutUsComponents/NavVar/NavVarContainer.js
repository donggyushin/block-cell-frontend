import React from "react";
import NavVar from "./NavVar";
import { animateScroll as scroll } from "react-scroll";

class NavVarContainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    },
    top: true
  };

  render() {
    return (
      <NavVar
        scrollToGreeting={this.scrollToGreeting}
        scrollToPresidentIntroduction={this.scrollToPresidentIntroduction}
        scrollToHistory={this.scrollToHistory}
        scrollToVision={this.scrollToVision}
        scrollToPartnership={this.scrollToPartnership}
        top={this.state.top}
      />
    );
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    if (document.documentElement.scrollTop >= 48) {
      this.setState({ ...this.state, top: false });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= 48) {
      this.setState({
        ...this.state,
        top: false
      });
    } else {
      this.setState({
        ...this.state,
        top: true
      });
    }
  };

  scrollToGreeting = () => {
    scroll.scrollTo(558, this.state.scrollOptions);
  };

  scrollToPresidentIntroduction = () => {
    scroll.scrollTo(1554, this.state.scrollOptions);
  };

  scrollToHistory = () => {
    scroll.scrollTo(1702, this.state.scrollOptions);
  };

  scrollToVision = () => {
    scroll.scrollTo(2750, this.state.scrollOptions);
  };

  scrollToPartnership = () => {
    scroll.scrollTo(4422, this.state.scrollOptions);
  };
}

export default NavVarContainer;
