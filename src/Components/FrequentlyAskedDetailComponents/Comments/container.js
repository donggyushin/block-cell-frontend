import React from "react";
import Presenter from "./presenter";
import { connect } from "react-redux";
import { GetCommentsForFaqRequest } from "store/modules/commentForFaq";

class CommentsForFAQContainer extends React.Component {
  state = {
    loading: true,
    comments: null
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
    const { loading, comments } = this.state;
    return (
      <div>{loading ? "loading..." : <Presenter comments={comments} />}</div>
    );
  }
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsForFAQContainer);
