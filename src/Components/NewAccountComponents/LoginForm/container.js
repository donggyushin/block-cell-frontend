import React from "react";
import LoginFormPresenter from "./presenter";
import { connect } from "react-redux";
import { newAccountRequest } from "../../../store/modules/user";

class LoginFormContainer extends React.Component {
  state = {
    username: "",
    password1: "",
    password2: "",
    open: false
  };
  render() {
    const { username, password1, password2, open } = this.state;
    const { handleChange, clickButton, onOpenModal, onCloseModal } = this;
    return (
      <LoginFormPresenter
        handleChange={handleChange}
        username={username}
        password1={password1}
        password2={password2}
        clickButton={clickButton}
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    );
  }

  onOpenModal = () => {
    this.setState({
      ...this.state,
      open: true
    });
  };

  onCloseModal = () => {
    this.setState({
      open: false
    });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "username") {
      this.setState({
        ...this.state,
        username: value
      });
    } else if (name === "password1") {
      this.setState({
        ...this.state,
        password1: value
      });
    } else {
      this.setState({
        ...this.state,
        password2: value
      });
    }
  };

  clickButton = () => {
    const { username, password1, password2 } = this.state;
    const { onClickSubmitButton } = this.props;
    if (username === "") {
      alert("아이디를 입력해주세요. ");
      return;
    }
    if (password1 === "") {
      alert("비밀번호를 입력해주세요. ");
      return;
    }
    if (password1 !== password2) {
      this.setState({
        ...this.state,
        open: true
      });
      return;
    } else if (username.length >= 15) {
      alert("아이디를 15자 이내로 입력하여 주세요. ");
      return;
    } else {
      onClickSubmitButton(username, password1, password2);
    }
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onClickSubmitButton: (username, password1, password2) => {
      dispatch(newAccountRequest(username, password1, password2));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
