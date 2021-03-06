import React from "react";
import NavVar from "./NavVar";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { logout } from "../../../store/modules/user";

class NavVarContainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    },
    top: true,
    visiable: false
  };

  render() {
    const { isLoggedIn, onClickLogoutSpan } = this.props;
    const { clickListIcon } = this;
    const { visiable } = this.state;
    return (
      <NavVar
        scrollToGreeting={this.scrollToGreeting}
        scrollToPresidentIntroduction={this.scrollToPresidentIntroduction}
        scrollToHistory={this.scrollToHistory}
        scrollToVision={this.scrollToVision}
        scrollToPartnership={this.scrollToPartnership}
        top={this.state.top}
        isLoggedIn={isLoggedIn}
        onClickLogoutSpan={onClickLogoutSpan}
        clickListIcon={clickListIcon}
        visiable={visiable}
      />
    );
  }

  clickListIcon = () => {
    this.setState({
      ...this.state,
      visiable: !this.state.visiable
    });
  };

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
    scroll.scrollTo(396, this.state.scrollOptions);
  };

  scrollToPresidentIntroduction = () => {
    scroll.scrollTo(1608, this.state.scrollOptions);
  };

  scrollToHistory = () => {
    scroll.scrollTo(1608, this.state.scrollOptions);
  };

  scrollToVision = () => {
    scroll.scrollTo(2864, this.state.scrollOptions);
  };

  scrollToPartnership = () => {
    scroll.scrollTo(4565, this.state.scrollOptions);
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
)(NavVarContainer);
