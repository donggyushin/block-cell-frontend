import React from "react";
import SearchVarPresenter from "./presenter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getQnaCountRequest } from "store/modules/qna";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: "",
    maxPage: 0,
    page: 0,
    firstPage: 0,
    lastPage: 0
  };

  async componentDidMount() {
    const { count, getQnaCount } = this.props;
    const { page } = this.props.match.params;
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
    getQnaCount();
    if (this.props.count !== 0) {
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
    const { page } = this.props.match.params;
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
    const { _onInputChange, _onSearchButtonClicked, _onEnterKeyPressed } = this;
    return (
      <SearchVarPresenter
        searchValue={searchValue}
        _onInputChange={_onInputChange}
        _onSearchButtonClicked={_onSearchButtonClicked}
        _onEnterKeyPressed={_onEnterKeyPressed}
        maxPage={maxPage}
        page={page}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    );
  }

  _onInputChange = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      searchValue: value
    });
  };

  _onSearchButtonClicked = () => {
    const { searchValue } = this.state;
    this.setState({
      ...this.state,
      searchValue: ""
    });
    this.props.history.push(`/qna-search-list/${searchValue}`);
  };

  _onEnterKeyPressed = e => {
    const { key } = e;
    const { searchValue } = this.state;
    if (key === "Enter") {
      this.setState({
        ...this.state,
        searchValue: ""
      });
      this.props.history.push(`/qna-search-list/${searchValue}`);
    }
  };
}

const mapStateToProps = state => {
  return {
    count: state.qna.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQnaCount: () => {
      dispatch(getQnaCountRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchVarContainer));
