import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import BuildingImage from "Components/AboutUsComponents/BuildingImage";

const cx = classNames.bind(styles);

const SearchVar = ({
  searchValue,
  _onSearchButtonClicked,
  _onChangeInput,
  _onEnterKeyPressed,
  page,
  maxPage,
  firstPage,
  lastPage
}) => {
  let pages = [];

  for (let i = firstPage; i <= lastPage; i++) {
    pages.push(Pages(page, i));
  }
  return (
    <div className={cx("container")}>
      <div className={cx("page-numbers")}>
        <div className={cx("first-page")}>
          <a href={`/notice/1`}>
            <button className={cx("white-button")}>처음</button>
          </a>
        </div>
        <div className={cx("numbers")}>
          {/* <button className={cx("white-button", "left")}>left</button> */}

          {pages}
          {/* <button className={cx("white-button")}>right</button> */}
        </div>
        <div className={cx("last-page")}>
          <a href={`/notice/${maxPage}`}>
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
          <button onClick={_onSearchButtonClicked}>검색</button>
        </div>
      </div>
      <div className={cx("building-image-container")}>
        <BuildingImage />
      </div>
    </div>
  );
};

const Pages = (page, i) => {
  return (
    <a href={`/notice/${i}`}>
      <span
        className={
          i.toString() === page.toString() ? cx("active") : cx("non-active")
        }
        key={i}
      >
        {i}
      </span>
    </a>
  );
};

export default SearchVar;
