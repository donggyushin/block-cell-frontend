import React from "react";
import { withRouter } from "react-router";
import ContentsPresenter from "./presenter";
import { connect } from "react-redux";
import {
  getQnaDetailRequest,
  getNextQnaPageRequest,
  getPreviousQnaPageRequest
} from "store/modules/qna";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    qna: null
  };

  componentDidMount() {
    const { getQnaDetail } = this.props;
    const { id } = this.props.match.params;
    getQnaDetail(id);

    if (this.props.qna) {
      this.setState({
        ...this.state,
        qna: this.props.qna,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.qna !== prevProps.qna) {
      this.setState({
        ...this.state,
        loading: false,
        qna: this.props.qna
      });
    }
  }

  render() {
    const { loading, qna } = this.state;
    const { _onClickNextButton, _onClickPreviousButton } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <ContentsPresenter
            qna={qna}
            _onClickNextButton={_onClickNextButton}
            _onClickPreviousButton={_onClickPreviousButton}
            goBack={this.goBackFunction}
          />
        )}
      </div>
    );
  }

  goBackFunction = () => {
    window.location.href = "/question&answer/1";
  };

  _onClickNextButton = () => {
    const { id } = this.props.match.params;
    getNextQnaPageRequest(id);
  };

  _onClickPreviousButton = () => {
    const { id } = this.props.match.params;
    getPreviousQnaPageRequest(id);
  };
}

const mapStateToProps = state => {
  return {
    qna: state.qna.qna
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQnaDetail: id => {
      dispatch(getQnaDetailRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
