import React, { Component } from "react";
import { connect } from "react-redux";
import AppPresenter from "./AppPresenter";
import { getUserProfileRequest } from "../../store/modules/user";

class AppContainer extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  render() {
    const { onCloseModal } = this;

    const { loading } = this.state;

    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <AppPresenter open={false} error={null} onCloseModal={onCloseModal} />
        )}
      </div>
    );
  }

  onCloseModal = () => {};
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => {
      dispatch(getUserProfileRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
