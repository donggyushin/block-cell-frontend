import React from "react";
import BulletinPresenter from "./presenter";
import { connect } from "react-redux";
import { get15FaqsRequest } from "../../../store/modules/faq";
import { withRouter } from "react-router";

class BulletinContainer extends React.Component {
  state = {
    admin: false,
    faqs: null,
    loading: true
  };
  async componentDidMount() {
    const { getFAQs } = this.props;
    if (this.props.user) {
      if (this.props.user.admin) {
        await this.setState({
          ...this.state,
          admin: true
        });
      }
    }

    getFAQs(this.props.match.params.page);

    if (this.props.faqs) {
      this.setState({
        ...this.state,
        faqs: this.props.faqs,
        loading: false
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        if (this.props.user.admin) {
          await this.setState({
            ...this.state,
            admin: true
          });
        }
      }
    }
    if (this.props.faqs !== prevProps.faqs) {
      this.setState({
        ...this.state,
        faqs: this.props.faqs,
        loading: false
      });
    }
  }

  render() {
    const { admin, loading, faqs } = this.state;
    return (
      <div>
        {loading ? (
          "loading..."
        ) : (
          <BulletinPresenter admin={admin} faqs={faqs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    faqs: state.faq.faqs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFAQs: page => {
      dispatch(get15FaqsRequest(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BulletinContainer));
