import React from "react";
import ContentsPresenter from "./Presenter";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getNoticeDetailRequest,
  getNextNoticePageRequest,
  getPreviousNoticePageRequest
} from "../../../store/modules/notice";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    notice: null
  };

  componentDidMount() {
    const { getNoticeDetail } = this.props;
    const { id } = this.props.match.params;
    getNoticeDetail(id);
    if (this.props.notice) {
      this.setState({
        ...this.state,
        notice: this.props.notice,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.notice !== prevProps.notice) {
      this.setState({
        ...this.state,
        notice: this.props.notice,
        loading: false
      });
    }
  }

  render() {
    const { loading, notice } = this.state;
    const { _onClickNextButton, _onClickPreviousButton } = this;
    return (
      <div>
        {loading ? (
          "loading"
        ) : (
          <ContentsPresenter
            _onClickNextButton={_onClickNextButton}
            _onClickPreviousButton={_onClickPreviousButton}
            notice={notice}
            goBack={this.goBackFunction}
          />
        )}
      </div>
    );
  }

  goBackFunction = () => {
    window.location.href = "/notice/1";
  };

  _onClickNextButton = () => {
    const { id } = this.props.match.params;
    getNextNoticePageRequest(id);
  };

  _onClickPreviousButton = () => {
    const { id } = this.props.match.params;
    getPreviousNoticePageRequest(id);
  };
}

const mapStateToProps = state => {
  return {
    notice: state.notice.notice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNoticeDetail: id => {
      dispatch(getNoticeDetailRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
