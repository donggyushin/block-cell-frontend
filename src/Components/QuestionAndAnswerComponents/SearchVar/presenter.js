import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SearchVarPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("page-numbers")}>
        <div className={cx("first-page")}>
          <button className={cx("white-button")}>처음</button>
        </div>
        <div className={cx("numbers")}>
          <button className={cx("white-button", "left")}>left</button>
          <span className={cx("active")}>1</span>
          <button className={cx("white-button")}>right</button>
        </div>
        <div className={cx("last-page")}>
          <button className={cx("white-button")}>마지막</button>
        </div>
      </div>
      <div className={cx("search-var")}>
        <div className={cx("input")}>
          <input />
        </div>
        <div className={cx("button")}>
          <button>검색</button>
        </div>
      </div>
    </div>
  );
};

export default SearchVarPresenter;
