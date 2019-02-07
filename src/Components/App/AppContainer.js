import React, { Component } from "react";
import { connect } from "react-redux";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  render() {
    const { open, error } = this.props;
    const { onCloseModal } = this;
    return (
      <AppPresenter open={open} error={error} onCloseModal={onCloseModal} />
    );
  }

  onCloseModal = () => {
    this.props.open = false;
    this.props.error = "";
  };
}

const mapStateToProps = state => {
  return {
    open: state.user.open,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
