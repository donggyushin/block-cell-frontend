import React from "react";
import { withRouter } from "react-router";
import ContentsPresenter from "./presenter";
import { connect } from "react-redux";
import {
  getFaqDetailRequest,
  getNextFaqPageRequest,
  getPreviousFaqPageRequest
} from "store/modules/faq";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    faq: null
  };

  componentDidMount() {
    const { getFaqDetail } = this.props;
    const { id } = this.props.match.params;
    getFaqDetail(id);

    if (this.props.faq) {
      this.setState({
        ...this.state,
        faq: this.props.faq,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.faq !== prevProps.faq) {
      this.setState({
        ...this.state,
        faq: this.props.faq,
        loading: false
      });
    }
  }

  render() {
    const { loading, faq } = this.state;
    const { _onClickNextButton, _onClickPreviousButton } = this;
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
          />
        )}
      </div>
    );
  }

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
    faq: state.faq.faq
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqDetail: id => {
      dispatch(getFaqDetailRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
