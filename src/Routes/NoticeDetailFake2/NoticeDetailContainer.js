import React from "react";
import NoticeDetailPresenter from "./NoticeDetailPresenter";

class NoticeDetailContainer extends React.Component {
  componentDidMount() {
    console.log("123");
  }
  render() {
    return <NoticeDetailPresenter />;
  }
}

export default NoticeDetailContainer;
