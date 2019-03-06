import React from "react";
import NavVar2 from "./NavVar2";
import { animateScroll } from "react-scroll";
import { connect } from "react-redux";
import { logout } from "../../store/modules/user";

class NavVar2Container extends React.Component {
  state = {
    visiable: false
  };

  render() {
    const { isLoggedIn, onClickLogoutSpan } = this.props;
    const { clickMenuIcon } = this;
    const { visiable } = this.state;

    return (
      <NavVar2
        clickMenuIcon={clickMenuIcon}
        isLoggedIn={isLoggedIn}
        onClickLogoutSpan={onClickLogoutSpan}
        visiable={visiable}
      />
    );
  }

  clickMenuIcon = () => {
    this.setState({
      ...this.state,
      visiable: !this.state.visiable
    });
  };

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

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickLogoutSpan: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavVar2Container);
