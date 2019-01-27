import React from "react";
import { withRouter } from "react-router-dom";
import ContentsPresenter from "./Presenter";

class ContentsContainer extends React.Component {
  render() {
    return <ContentsPresenter goBack={this.goBackFunction} />;
  }

  goBackFunction = () => {
    console.log(this.props.history.goBack());
  };
}

export default withRouter(ContentsContainer);
