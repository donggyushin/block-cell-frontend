import React from "react";
import { withRouter } from "react-router";
import ContentsPresenter from "./presenter";
import { connect } from "react-redux";
import {
  getQnaDetailRequest,
  getNextQnaPageRequest,
  getPreviousQnaPageRequest,
  deleteQnaRequest
} from "store/modules/qna";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    qna: null,
    admin: false
  };

  componentDidMount() {
    const { getQnaDetail, user } = this.props;
    const { id } = this.props.match.params;
    getQnaDetail(id);

    if (this.props.qna) {
      this.setState({
        ...this.state,
        qna: this.props.qna,
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
    const { user } = this.props;
    if (this.props.qna !== prevProps.qna) {
      this.setState({
        ...this.state,
        loading: false,
        qna: this.props.qna
      });
    }
    if (user !== prevProps.user) {
      if (user.admin) {
        this.setState({
          ...this.state,
          admin: true
        });
      }
    }
  }

  render() {
    const { loading, qna, admin } = this.state;
    const {
      _onClickNextButton,
      _onClickPreviousButton,
      _onClickDeleteButton
    } = this;
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
            _onClickDeleteButton={_onClickDeleteButton}
            admin={admin}
          />
        )}
      </div>
    );
  }

  _onClickDeleteButton = () => {
    const { deleteQna } = this.props;
    const { id } = this.props.match.params;
    deleteQna(id);
  };

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
    qna: state.qna.qna,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQnaDetail: id => {
      dispatch(getQnaDetailRequest(id));
    },
    deleteQna: id => {
      dispatch(deleteQnaRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
