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
    text: "",
    user: null
  };
  componentDidMount() {
    const { getComments, qnaId, user } = this.props;
    getComments(qnaId);
    if (this.props.comments) {
      this.setState({
        ...this.state,
        comments: this.props.comments,
        loading: false
      });
    }
    if (user) {
      this.setState({
        ...this.state,
        user
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { comments, user } = this.props;
    if (comments !== prevProps.comments) {
      this.setState({
        ...this.state,
        comments,
        loading: false
      });
    }
    if (user !== prevProps.user) {
      this.setState({
        ...this.state,
        user
      });
    }
  }
  render() {
    const { comments, loading, text, user } = this.state;
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
            user={user}
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
    comments: state.commentForQna.comments,
    user: state.user.user
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
