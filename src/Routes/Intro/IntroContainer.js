import React from "react";
import IntroPresenter from "./IntroPresenter";

class IntroContainer extends React.Component {
  state = {
    modal: false
  };
  render() {
    const { modal } = this.state;
    const { _onClickCloseButton } = this;
    return (
      <IntroPresenter _onClickCloseButton={_onClickCloseButton} modal={modal} />
    );
  }

  _onClickCloseButton = () => {
    this.setState({
      ...this.state,
      modal: false
    });
  };
}

export default IntroContainer;
