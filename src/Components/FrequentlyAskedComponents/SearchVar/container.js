import React from "react";
import SearchVarPresenter from "./presenter";
import { withRouter } from "react-router-dom";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: ""
  };
  render() {
    const { searchValue } = this.state;
    const { _onChangeInput, _onEnterKeyPressed, _onSearchButtonPressed } = this;
    return (
      <SearchVarPresenter
        _onChangeInput={_onChangeInput}
        _onEnterKeyPressed={_onEnterKeyPressed}
        _onSearchButtonPressed={_onSearchButtonPressed}
        searchValue={searchValue}
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

export default withRouter(SearchVarContainer);
