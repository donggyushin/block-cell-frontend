import React from "react";
import Contents from "./presenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetNoticesByTermRequest } from "store/modules/notice";

class ContentsContainer extends React.Component {
  state = {
    noticesByTerm: null,
    loading: true
  };

  componentDidMount() {
    const { GetNoticesByTerm } = this.props;
    const { searchValue } = this.props.match.params;
    GetNoticesByTerm(searchValue);
    if (this.props.noticesByTerm) {
      this.setState({
        ...this.state,
        noticesByTerm: this.props.noticesByTerm,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.noticesByTerm !== prevProps.noticesByTerm) {
      this.setState({
        ...this.state,
        noticesByTerm: this.props.noticesByTerm,
        loading: false
      });
    }
  }

  render() {
    const { goBackFn } = this;
    const { loading, noticesByTerm } = this.state;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Contents noticesByTerm={noticesByTerm} goBackFn={goBackFn} />
        )}
      </div>
    );
  }

  goBackFn = () => {
    this.props.history.goBack();
  };
}

const mapStateToProps = state => {
  return {
    noticesByTerm: state.notice.noticesByTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetNoticesByTerm: searchValue => {
      dispatch(GetNoticesByTermRequest(searchValue));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
