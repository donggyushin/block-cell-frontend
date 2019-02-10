import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import { getCommentsForQnaRequest } from "store/modules/commentForQna";

class CommentsForQnaContainer extends React.Component {
  state = {
    loading: true,
    comments: null
  };
  componentDidMount() {
    const { getComments, qnaId } = this.props;
    getComments(qnaId);
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
    const { comments, loading } = this.state;
    return (
      <div>{loading ? "loading..." : <Presenter comments={comments} />}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentForQna.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getComments: qnaId => {
      dispatch(getCommentsForQnaRequest(qnaId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForQnaContainer);
