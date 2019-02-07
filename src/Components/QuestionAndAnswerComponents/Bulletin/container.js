import React from "react";
import BulletinPresenter from "./presenter";
import { connect } from "react-redux";

class BulletinContainer extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        ...this.state,
        user: this.props.user
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && !prevProps.user) {
      this.setState({
        ...this.state,
        user: this.props.user
      });
    }
  }
  render() {
    const { user } = this.state;
    return <BulletinPresenter user={user} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BulletinContainer);
