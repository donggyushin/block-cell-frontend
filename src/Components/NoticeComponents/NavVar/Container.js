import React from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";

class Container extends React.Component {
  state = {
    top: true
  };
  render() {
    const { isLoggedIn } = this.props;
    return <Presenter top={this.state.top} isLoggedIn={isLoggedIn} />;
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
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
