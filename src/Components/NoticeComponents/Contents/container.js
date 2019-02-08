import React from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { get15NoticesRequest } from "../../../store/modules/notice";
import { withRouter } from "react-router";

class Container extends React.Component {
  state = {
    loading: true,
    admin: false,
    notices: null
  };

  componentDidMount() {
    const { getNotices } = this.props;
    const { page } = this.props.match.params;

    if (this.props.user) {
      if (this.props.user.admin) {
        this.setState({
          ...this.state,
          admin: true
        });
      }
    }

    getNotices(page);

    if (this.props.notices) {
      this.setState({
        ...this.state,
        notices: this.props.notices,
        loading: false
      });
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

    if (this.props.notices && !prevProps.notices) {
      this.setState({
        ...this.state,
        notices: this.props.notices,
        loading: false
      });
    }
  }
  render() {
    const { loading, admin, notices } = this.state;
    return (
      <div>
        {loading ? "loading..." : <Presenter admin={admin} notices={notices} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    notices: state.notice.notices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotices: page => {
      dispatch(get15NoticesRequest(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container));
