import React from "react";
import NavVar2 from "./NavVar2";
import { animateScroll } from "react-scroll";

class NavVar2Container extends React.Component {
  render() {
    return <NavVar2 />;
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

export default NavVar2Container;
