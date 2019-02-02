import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SummernoteEditor extends React.Component {
  render() {
    return <div className={cx("container")}>web editor</div>;
  }
}

export default SummernoteEditor;
