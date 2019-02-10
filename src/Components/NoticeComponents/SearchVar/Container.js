import React from "react";
import SearchVar from "./Presenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GetNoticeCountRequest } from "store/modules/notice";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: "",
    page: 1,
    maxPage: 1,
    firstPage: 1,
    lastPage: 1,
    loading: true
  };

  async componentDidMount() {
    const { page } = this.props.match.params;

    const { getCount } = this.props;
    this.setState({
      ...this.state,
      page
    });

    getCount();
    if (this.props.count !== 0) {
      const maxPage = parseInt(this.props.count / 15 + 1).toString();
      await this.setState({
        ...this.state,
        maxPage: maxPage
      });
    }
    if (page - 5 <= 0) {
      const firstPage = 1;
      this.setState({
        ...this.state,
        firstPage
      });
    } else {
      const firstPage = page - 5;
      this.setState({
        ...this.state,
        firstPage
      });
    }

    if (page + 5 > this.props.count / 15 + 1) {
      const lastPage = this.props.count / 15 + 1;
      this.setState({
        ...this.state,
        lastPage
      });
    } else {
      const lastPage = page + 5;
      this.setState({
        ...this.state,
        lastPage
      });
    }
  }

  async componentDidUpdate(prevProps) {
    const { count } = this.props;
    const { page } = this.state;
    if (count !== prevProps.count) {
      const maxPage = parseInt(this.props.count / 15 + 1).toFixed();
      await this.setState({
        ...this.state,
        maxPage: maxPage
      });

      if (page + 5 > maxPage) {
        const lastPage = maxPage;
        this.setState({
          ...this.state,
          lastPage
        });
      } else {
        const lastPage = page + 5;
        this.setState({
          ...this.state,
          lastPage
        });
      }
    }
  }

  render() {
    const { searchValue, firstPage, lastPage, maxPage } = this.state;
    const page = this.props.match.params.page;
    const { _onChangeInput, _onEnterKeyPressed, _onSearchButtonClicked } = this;
    return (
      <SearchVar
        searchValue={searchValue}
        _onSearchButtonClicked={_onSearchButtonClicked}
        _onChangeInput={_onChangeInput}
        _onEnterKeyPressed={_onEnterKeyPressed}
        page={page}
        firstPage={firstPage}
        lastPage={lastPage}
        maxPage={maxPage}
      />
    );
  }

  _onEnterKeyPressed = e => {
    const key = e.key;
    const { searchValue } = this.state;
    if (key === "Enter") {
      this.setState({
        ...this.state,
        searchValue: ""
      });
      this.props.history.push(`/notice-search-list/${searchValue}`);
    }
  };

  _onSearchButtonClicked = () => {
    const { searchValue } = this.state;

    this.setState({
      ...this.state,
      searchValue: ""
    });

    this.props.history.push(`/notice-search-list/${searchValue}`);
  };

  _onChangeInput = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      searchValue: value
    });
  };
}

const mapStateToProps = state => {
  return {
    count: state.notice.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCount: () => {
      dispatch(GetNoticeCountRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchVarContainer));
