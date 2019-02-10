import React from "react";
import ContentsPresenter from "./Presenter";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getNoticeDetailRequest,
  getNextNoticePageRequest,
  getPreviousNoticePageRequest,
  DeleteNoticeRequest
} from "../../../store/modules/notice";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    notice: null,
    admin: false
  };

  componentDidMount() {
    const { getNoticeDetail, user } = this.props;
    const { id } = this.props.match.params;
    getNoticeDetail(id);
    if (this.props.notice) {
      this.setState({
        ...this.state,
        notice: this.props.notice,
        loading: false
      });
    }

    if (user) {
      if (user.admin) {
        this.setState({
          ...this.state,
          admin: true
        });
      }
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

    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        if (this.props.user.admin) {
          this.setState({
            ...this.state,
            admin: true
          });
        }
      }
    }
  }

  render() {
    const { loading, notice, admin } = this.state;
    const {
      _onClickNextButton,
      _onClickPreviousButton,
      _onClickDeleteButton
    } = this;
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
            admin={admin}
            _onClickDeleteButton={_onClickDeleteButton}
          />
        )}
      </div>
    );
  }

  _onClickDeleteButton = () => {
    const { id } = this.props.match.params;
    const { deleteNotice } = this.props;
    deleteNotice(id);
  };

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
    notice: state.notice.notice,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNoticeDetail: id => {
      dispatch(getNoticeDetailRequest(id));
    },
    deleteNotice: id => {
      dispatch(DeleteNoticeRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
