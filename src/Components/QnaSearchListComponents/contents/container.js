import React from "react";
import Contents from "./presenter";
import { connect } from "react-redux";
import { getQnasByTermRequest } from "store/modules/qna";
import { withRouter } from "react-router-dom";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    qnasByTerm: null
  };

  componentDidMount() {
    const { qnasByTerm, getQnaByTerm, match } = this.props;

    const { searchValue } = match.params;

    getQnaByTerm(searchValue);

    if (qnasByTerm) {
      this.setState({
        ...this.state,
        qnasByTerm,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { qnasByTerm } = this.props;
    if (qnasByTerm !== prevProps.qnasByTerm) {
      this.setState({
        ...this.state,
        qnasByTerm,
        loading: false
      });
    }
  }

  render() {
    const { loading, qnasByTerm } = this.state;
    const { _goBack } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Contents _goBack={_goBack} qnasByTerm={qnasByTerm} />
        )}
      </div>
    );
  }

  _goBack = () => {
    this.props.history.goBack();
  };
}

const mapStateToProps = state => {
  return {
    qnasByTerm: state.qna.qnasByTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQnaByTerm: searchValue => {
      dispatch(getQnasByTermRequest(searchValue));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
