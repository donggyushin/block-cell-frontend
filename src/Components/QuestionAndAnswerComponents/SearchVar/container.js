import React from "react";
import SearchVarPresenter from "./presenter";
import { withRouter } from "react-router-dom";

class SearchVarContainer extends React.Component {
  state = {
    searchValue: ""
  };
  render() {
    const { searchValue } = this.state;
    const { _onInputChange, _onSearchButtonClicked, _onEnterKeyPressed } = this;
    return (
      <SearchVarPresenter
        searchValue={searchValue}
        _onInputChange={_onInputChange}
        _onSearchButtonClicked={_onSearchButtonClicked}
        _onEnterKeyPressed={_onEnterKeyPressed}
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

export default withRouter(SearchVarContainer);
