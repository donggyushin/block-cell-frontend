import React from "react";
import NavVar from "./NavVar";
import { animateScroll as scroll } from "react-scroll";

class NavVarConatainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    }
  };
  render() {
    const {
      toFirstItem,
      toSecondItem,
      toThirdItem,
      toFourthItem,
      toFifthItem
    } = this;
    return (
      <NavVar
        toFirstItem={toFirstItem}
        toSecondItem={toSecondItem}
        toThirdItem={toThirdItem}
        toFourthItem={toFourthItem}
        toFifthItem={toFifthItem}
      />
    );
  }

  toFirstItem = () => {
    scroll.scrollTo(424, this.state.scrollOptions);
  };

  toSecondItem = () => {
    scroll.scrollTo(761, this.state.scrollOptions);
  };

  toThirdItem = () => {
    scroll.scrollTo(1102, this.state.scrollOptions);
  };

  toFourthItem = () => {
    scroll.scrollTo(1374, this.state.scrollOptions);
  };

  toFifthItem = () => {
    scroll.scrollTo(1686, this.state.scrollOptions);
  };
}

export default NavVarConatainer;
