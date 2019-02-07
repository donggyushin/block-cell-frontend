import React from "react";
import BulletinPresenter from "./presenter";
import { connect } from "react-redux";

class BulletinContainer extends React.Component {
  state = {
    admin: false
  };
  componentDidMount() {
    if (this.props.user) {
      if (this.props.user.admin) {
        this.setState({
          ...this.state,
          admin: true
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && !prevProps.user) {
      if (this.props.user.admin) {
        this.setState({
          ...this.state,
          admin: true
        });
      }
    }
  }

  render() {
    const { admin } = this.state;
    return <BulletinPresenter admin={admin} />;
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
