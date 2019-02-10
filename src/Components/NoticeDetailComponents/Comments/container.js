import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import { GetCommentsRequest } from "store/modules/commentForNotice";

class CommentsForNotice extends React.Component {
  state = {
    loading: true,
    comments: null
  };

  componentDidMount() {
    const { GetComments, noticeId } = this.props;
    GetComments(noticeId);
    if (this.props.comments) {
      this.setState({
        ...this.state,
        comments: this.props.comments,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { comments } = this.props;

    if (comments !== prevProps.comments) {
      this.setState({
        ...this.state,
        comments,
        loading: false
      });
    }
  }

  render() {
    const { loading, comments } = this.state;
    return (
      <div>{loading ? "loading..." : <Presenter comments={comments} />}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentForNotice.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetComments: noticeId => {
      dispatch(GetCommentsRequest(noticeId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForNotice);
