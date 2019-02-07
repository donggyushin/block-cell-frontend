import React from "react";
import NavVar from "./NavVar";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { logout } from "../../../store/modules/user";

class NavVarConatainer extends React.Component {
  state = {
    scrollOptions: {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    },
    top: true
  };
  render() {
    const {
      toFirstItem,
      toSecondItem,
      toThirdItem,
      toFourthItem,
      toFifthItem
    } = this;
    const { isLoggedIn, onClickLogoutSpan } = this.props;
    return (
      <NavVar
        toFirstItem={toFirstItem}
        toSecondItem={toSecondItem}
        toThirdItem={toThirdItem}
        toFourthItem={toFourthItem}
        toFifthItem={toFifthItem}
        top={this.state.top}
        isLoggedIn={isLoggedIn}
        onClickLogoutSpan={onClickLogoutSpan}
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
)(NavVarConatainer);
