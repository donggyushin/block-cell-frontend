import React from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { logout } from "../../../store/modules/user";

class Container extends React.Component {
  state = {
    top: true,
    visiable: false
  };

  render() {
    const { isLoggedIn, onClickLogoutSpan } = this.props;
    const { clickMenuIcon } = this;
    const { visiable } = this.state;
    return (
      <Presenter
        clickMenuIcon={clickMenuIcon}
        visiable={visiable}
        onClickLogoutSpan={onClickLogoutSpan}
        top={this.state.top}
        isLoggedIn={isLoggedIn}
      />
    );
  }

  clickMenuIcon = () => {
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
)(Container);
