import React from "react";
import Contents from "./presenter";
import { connect } from "react-redux";
import { getFaqsByTermRequest } from "store/modules/faq";
import { withRouter } from "react-router-dom";

class ContentsContainer extends React.Component {
  state = {
    loading: true,
    faqsByTerm: null
  };

  componentDidMount() {
    const { faqsByTerm, getFaqsByTerm } = this.props;
    const { searchValue } = this.props.match.params;
    getFaqsByTerm(searchValue);
    if (faqsByTerm) {
      this.setState({
        ...this.state,
        faqsByTerm,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { faqsByTerm } = this.props;
    if (faqsByTerm !== prevProps.faqsByTerm) {
      this.setState({
        ...this.state,
        faqsByTerm,
        loading: false
      });
    }
  }

  render() {
    const { loading, faqsByTerm } = this.state;
    const { _goBack } = this;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <Contents faqsByTerm={faqsByTerm} _goBack={_goBack} />
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
    faqsByTerm: state.faq.faqsByTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqsByTerm: searchValue => {
      dispatch(getFaqsByTermRequest(searchValue));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentsContainer));
