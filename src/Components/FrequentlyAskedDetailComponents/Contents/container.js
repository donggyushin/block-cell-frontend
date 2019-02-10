import React from "react";
import { withRouter } from "react-router";
import ContentsPresenter from "./presenter";
import { connect } from "react-redux";
import {
  getFaqDetailRequest,
  getNextFaqPageRequest,
  getPreviousFaqPageRequest,
  deleteFaqRequest
} from "store/modules/faq";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    faq: null,
    admin: false
  };

  componentDidMount() {
    const { getFaqDetail, user } = this.props;
    const { id } = this.props.match.params;
    getFaqDetail(id);

    if (this.props.faq) {
      this.setState({
        ...this.state,
        faq: this.props.faq,
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
    if (this.props.faq !== prevProps.faq) {
      this.setState({
        ...this.state,
        faq: this.props.faq,
        loading: false
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
    const { loading, faq, admin } = this.state;
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
            _onClickNextButton={_onClickNextButton}
            _onClickPreviousButton={_onClickPreviousButton}
            faq={faq}
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
    const { deleteFaq } = this.props;
    deleteFaq(id);
  };

  goBackFunction = () => {
    window.location.href = "/frequently-asked/1";
  };

  _onClickNextButton = () => {
    const { id } = this.props.match.params;
    getNextFaqPageRequest(id);
  };

  _onClickPreviousButton = () => {
    const { id } = this.props.match.params;
    getPreviousFaqPageRequest(id);
  };
}

const mapStateToProps = state => {
  return {
    faq: state.faq.faq,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqDetail: id => {
      dispatch(getFaqDetailRequest(id));
    },
    deleteFaq: id => {
      dispatch(deleteFaqRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
