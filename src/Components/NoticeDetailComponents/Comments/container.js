import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import {
  GetCommentsRequest,
  PostCommentForNoticeReuqest
} from "store/modules/commentForNotice";

class CommentsForNotice extends React.Component {
  state = {
    loading: true,
    comments: null,
    text: "",
    user: null
  };

  componentDidMount() {
    const { GetComments, noticeId, user } = this.props;
    GetComments(noticeId);
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
    const { loading, comments, text, user } = this.state;
    const { _onEnterKeyPressed, _onChangeInput, _onClickSubmitButton } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Presenter
            _onEnterKeyPressed={_onEnterKeyPressed}
            _onChangeInput={_onChangeInput}
            _onClickSubmitButton={_onClickSubmitButton}
            text={text}
            comments={comments}
            user={user}
          />
        )}
      </div>
    );
  }

  _onEnterKeyPressed = e => {
    const { key } = e;
    const { postComment, noticeId } = this.props;
    const { text } = this.state;

    if (key === "Enter") {
      if (text === "") {
        alert("내용을 입력하여 주세요");
        return;
      }
      postComment(noticeId, text);
      this.setState({
        ...this.state,
        text: ""
      });
    }
  };

  _onChangeInput = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      text: value
    });
  };

  _onClickSubmitButton = () => {
    const { postComment, noticeId } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("내용을 입력하여 주세요");
      return;
    }
    postComment(noticeId, text);
    this.setState({
      ...this.state,
      text: ""
    });
  };
}

const mapStateToProps = state => {
  return {
    comments: state.commentForNotice.comments,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetComments: noticeId => {
      dispatch(GetCommentsRequest(noticeId));
    },
    postComment: (noticeId, text) => {
      dispatch(PostCommentForNoticeReuqest(noticeId, text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForNotice);
