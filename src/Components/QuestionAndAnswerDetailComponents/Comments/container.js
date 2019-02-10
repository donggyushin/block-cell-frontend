import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import {
  getCommentsForQnaRequest,
  postCommentForQnaRequest
} from "store/modules/commentForQna";

class CommentsForQnaContainer extends React.Component {
  state = {
    loading: true,
    comments: null,
    text: ""
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
    const { comments, loading, text } = this.state;
    const { _onSubmitButtonClicked, _onInputChange, _onEnterKeyPressed } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Presenter
            _onSubmitButtonClicked={_onSubmitButtonClicked}
            _onInputChange={_onInputChange}
            _onEnterKeyPressed={_onEnterKeyPressed}
            text={text}
            comments={comments}
          />
        )}
      </div>
    );
  }

  _onSubmitButtonClicked = () => {
    const { postComment, qnaId } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("내용을 입력하여 주세요");
      return;
    }
    postComment(qnaId, text);
    this.setState({
      ...this.state,
      text: ""
    });
  };

  _onInputChange = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      text: value
    });
  };

  _onEnterKeyPressed = e => {
    const { key } = e;
    const { qnaId, postComment } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("내용을 입력하여 주세요");
      return;
    }
    if (key === "Enter") {
      postComment(qnaId, text);
      this.setState({
        ...this.state,
        text: ""
      });
    }
  };
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
    },
    postComment: (qnaId, text) => {
      dispatch(postCommentForQnaRequest(qnaId, text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForQnaContainer);
