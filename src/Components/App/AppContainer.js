import React, { Component } from "react";
import { connect } from "react-redux";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  render() {
    return <AppPresenter />;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
