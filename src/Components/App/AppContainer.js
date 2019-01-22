import React, { Component } from "react";
import { connect } from "react-redux";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  render() {
    return <AppPresenter />;
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
