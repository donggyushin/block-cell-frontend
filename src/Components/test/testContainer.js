import React, { Component } from "react";
import testPresenter from "./testPresenter";
import { connect } from "react-redux";
import * as testActions from "store/modules/test";

class testContainer extends Component {
  render() {
    return <testPresenter />;
  }
}

const mapStateToProps = state => ({
  number: state.test.number
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(testActions.increment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(testContainer);
