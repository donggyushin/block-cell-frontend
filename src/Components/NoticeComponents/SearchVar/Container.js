import React from "react";
import SearchVar from "./Presenter";
import { withRouter } from "react-router-dom";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: ""
  };
  render() {
    const { searchValue } = this.state;
    const { _onChangeInput, _onEnterKeyPressed, _onSearchButtonClicked } = this;
    return (
      <SearchVar
        searchValue={searchValue}
        _onSearchButtonClicked={_onSearchButtonClicked}
        _onChangeInput={_onChangeInput}
        _onEnterKeyPressed={_onEnterKeyPressed}
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

export default withRouter(SearchVarContainer);
