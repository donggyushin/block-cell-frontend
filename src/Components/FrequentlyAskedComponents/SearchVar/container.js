import React from "react";
import SearchVarPresenter from "./presenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFaqCountRequest } from "store/modules/faq";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: "",
    maxPage: 0,
    page: 0,
    firstPage: 0,
    lastPage: 0
  };

  async componentDidMount() {
    const { page } = this.props.match.params;
    const { getFaqCount, count } = this.props;

    await this.setState({
      ...this.state,
      page
    });

    if (page - 5 > 0) {
      this.setState({
        ...this.state,
        firstPage: page - 5
      });
    } else {
      this.setState({
        ...this.state,
        firstPage: 1
      });
    }

    getFaqCount();
    if (count !== 0) {
      const maxPage = await parseInt(count / 15 + 1);
      await this.setState({
        ...this.state,
        maxPage
      });
      if (page + 5 < maxPage) {
        this.setState({
          ...this.state,
          lastPage: page + 5
        });
      } else {
        this.setState({
          ...this.state,
          lastPage: maxPage
        });
      }
    }
  }

  async componentDidUpdate(prevProps) {
    const { count } = this.props;
    const { page } = this.state;
    if (count !== prevProps.count) {
      const maxPage = await parseInt(count / 15 + 1);
      await this.setState({
        ...this.state,
        maxPage
      });
      if (page + 5 < maxPage) {
        this.setState({
          ...this.state,
          lastPage: page + 5
        });
      } else {
        this.setState({
          ...this.state,
          lastPage: maxPage
        });
      }
    }
  }

  render() {
    const { searchValue, maxPage, page, firstPage, lastPage } = this.state;
    const { _onChangeInput, _onEnterKeyPressed, _onSearchButtonPressed } = this;
    return (
      <SearchVarPresenter
        _onChangeInput={_onChangeInput}
        _onEnterKeyPressed={_onEnterKeyPressed}
        _onSearchButtonPressed={_onSearchButtonPressed}
        searchValue={searchValue}
        maxPage={maxPage}
        page={page}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    );
  }

  _onChangeInput = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      searchValue: value
    });
  };

  _onEnterKeyPressed = e => {
    const key = e.key;
    const { searchValue } = this.state;
    if (key === "Enter") {
      this.setState({
        ...this.state,
        searchValue: ""
      });
      this.props.history.push(`/faq-search-list/${searchValue}`);
    }
  };

  _onSearchButtonPressed = () => {
    const { searchValue } = this.state;
    this.setState({
      ...this.state,
      searchValue: ""
    });
    this.props.history.push(`/faq-search-list/${searchValue}`);
  };
}

const mapStateToProps = state => {
  return {
    count: state.faq.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqCount: () => {
      dispatch(getFaqCountRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchVarContainer));
