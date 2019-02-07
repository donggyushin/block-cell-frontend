import React from "react";
import LoginFormPresenter from "./presenter";
import { connect } from "react-redux";
import { loginRequest } from "../../../store/modules/user";

class LoginFormContainer extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    const { handleChange, clickButton } = this;
    return (
      <LoginFormPresenter
        handleChange={handleChange}
        username={username}
        password={password}
        clickButton={clickButton}
      />
    );
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "username") {
      this.setState({
        ...this.state,
        username: value
      });
    } else {
      this.setState({
        ...this.state,
        password: value
      });
    }
  };

  clickButton = () => {
    const { onLoginButtonClick } = this.props;
    const { username, password } = this.state;
    onLoginButtonClick(username, password);
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginButtonClick: (username, password) => {
      dispatch(loginRequest(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
