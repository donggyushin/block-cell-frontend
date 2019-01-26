import React from "react";
import Button from "./ButtonToTop";
import { animateScroll as scroll } from "react-scroll";

class ButtonContainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    }
  };

  render() {
    const { scrollToTop } = this;
    return <Button scrollToTop={scrollToTop} />;
  }

  scrollToTop = () => {
    scroll.scrollToTop(this.state.scrollOptions);
  };
}

export default ButtonContainer;
