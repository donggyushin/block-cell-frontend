import React from "react";
import BulletinPresenter from "./presenter";
import { connect } from "react-redux";
import { get15QnasRequest } from "../../../store/modules/qna";
import { withRouter } from "react-router";

class BulletinContainer extends React.Component {
  state = {
    user: null,
    loading: true,
    qnas: null
  };

  componentDidMount() {
    const { getQNAs } = this.props;
    if (this.props.user) {
      this.setState({
        ...this.state,
        user: this.props.user
      });
    }

    getQNAs(this.props.match.params.page);

    if (this.props.qnas) {
      this.setState({
        ...this.state,
        loading: false,
        qnas: this.props.qnas
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

    if (this.props.qnas && !prevProps.qnas) {
      this.setState({
        ...this.state,
        qnas: this.props.qnas,
        loading: false
      });
    }
  }
  render() {
    const { user, loading, qnas } = this.state;
    return (
      <div>
        {loading ? "loading..." : <BulletinPresenter qnas={qnas} user={user} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    qnas: state.qna.qnas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQNAs: page => {
      dispatch(get15QnasRequest(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BulletinContainer));
