import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import BuildingImage from "Components/AboutUsComponents/BuildingImage";

const cx = classNames.bind(styles);

const SearchVarPresenter = ({
  searchValue,
  _onInputChange,
  _onSearchButtonClicked,
  _onEnterKeyPressed,
  maxPage,
  page,
  firstPage,
  lastPage
}) => {
  let pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(pageNumber(page, i));
  }
  return (
    <div className={cx("container")}>
      <div className={cx("page-numbers")}>
        <div className={cx("first-page")}>
          <a href={"/question&answer/1"}>
            <button className={cx("white-button")}>처음</button>
          </a>
        </div>
        <div className={cx("numbers")}>
          {/* <button className={cx("white-button", "left")}>left</button> */}
          {pageNumbers}
          {/* <button className={cx("white-button")}>right</button> */}
        </div>
        <div className={cx("last-page")}>
          <a href={`/question&answer/${maxPage}`}>
            <button className={cx("white-button")}>마지막</button>
          </a>
        </div>
      </div>
      <div className={cx("search-var")}>
        <div className={cx("input")}>
          <input
            value={searchValue}
            onChange={_onInputChange}
            onKeyPress={_onEnterKeyPressed}
          />
        </div>
        <div className={cx("button")}>
          <button onClick={_onSearchButtonClicked}>검색</button>
        </div>
      </div>
      <div className={cx("building-image-container")}>
        <BuildingImage />
      </div>
    </div>
  );
};

const pageNumber = (page, i) => {
  return (
    <a href={`/question&answer/${i}`}>
      <span
        className={
          page.toString() === i.toString() ? cx("active") : cx("non-active")
        }
      >
        {i}
      </span>
    </a>
  );
};

export default SearchVarPresenter;
