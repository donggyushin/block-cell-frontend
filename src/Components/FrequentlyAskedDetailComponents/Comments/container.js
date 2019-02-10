import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import {
  GetCommentsForFaqRequest,
  PostCommentForFaqRequest
} from "store/modules/commentForFaq";

class CommentsForFAQContainer extends React.Component {
  state = {
    loading: true,
    comments: null,
    text: ""
  };
  componentDidMount() {
    const { GetComments, faqId } = this.props;
    GetComments(faqId);

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
    const { loading, comments, text } = this.state;
    const { _onEnterKeyPressed, _onSubmitButtonClicked, _onInputChange } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Presenter
            _onEnterKeyPressed={_onEnterKeyPressed}
            _onSubmitButtonClicked={_onSubmitButtonClicked}
            _onInputChange={_onInputChange}
            text={text}
            comments={comments}
          />
        )}
      </div>
    );
  }

  _onEnterKeyPressed = e => {
    const { key } = e;
    const { faqId, PostComment } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("내용을 입력하여 주세요");
      return;
    }
    if (key === "Enter") {
      PostComment(faqId, text);
      this.setState({
        ...this.state,
        text: ""
      });
    }
  };

  _onSubmitButtonClicked = () => {
    const { faqId, PostComment } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("내용을 입력하여 주세요");
      return;
    }
    PostComment(faqId, text);
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
}

const mapStateToProps = state => {
  return {
    comments: state.commentForFaq.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetComments: faqId => {
      dispatch(GetCommentsForFaqRequest(faqId));
    },
    PostComment: (faqId, text) => {
      dispatch(PostCommentForFaqRequest(faqId, text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForFAQContainer);
