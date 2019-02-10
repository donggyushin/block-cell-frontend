import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import BuildingImage from "Components/AboutUsComponents/BuildingImage";

const cx = classNames.bind(styles);

const SearchVarPresenter = ({
  _onChangeInput,
  _onEnterKeyPressed,
  _onSearchButtonPressed,
  searchValue,
  maxPage,
  page,
  firstPage,
  lastPage
}) => {
  let pages = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pages.push(pageNumber(page, i));
  }
  return (
    <div className={cx("container")}>
      <div className={cx("page-numbers")}>
        <div className={cx("first-page")}>
          <a href={`/frequently-asked/1`}>
            <button className={cx("white-button")}>처음</button>
          </a>
        </div>
        <div className={cx("numbers")}>
          {/* <button className={cx("white-button", "left")}>left</button> */}
          {pages}
          {/* <button className={cx("white-button")}>right</button> */}
        </div>
        <div className={cx("last-page")}>
          <a href={`/frequently-asked/${maxPage}`}>
            <button className={cx("white-button")}>마지막</button>
          </a>
        </div>
      </div>
      <div className={cx("search-var")}>
        <div className={cx("input")}>
          <input
            value={searchValue}
            onChange={_onChangeInput}
            onKeyPress={_onEnterKeyPressed}
          />
        </div>
        <div className={cx("button")}>
          <button onClick={_onSearchButtonPressed}>검색</button>
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
    <a href={`/frequently-asked/${i}`}>
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
