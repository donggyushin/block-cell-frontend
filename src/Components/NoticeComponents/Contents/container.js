import React from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";

class Container extends React.Component {
  state = {
    loading: false,
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
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        if (this.props.user.admin) {
          this.setState({
            ...this.state,
            admin: true
          });
        }
      }
    }
  }
  render() {
    const { loading, admin } = this.state;
    return <div>{loading ? "loading..." : <Presenter admin={admin} />}</div>;
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
)(Container);
