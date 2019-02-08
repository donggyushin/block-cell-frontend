import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import TitlePresenter from "Components/Title";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <TitlePresenter title={"공지사항"} subTitle={"Notice"} />
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>번호</span>
          <span>제목</span>
          <span>작성일</span>
          <span>조회수</span>
        </div>
        <div className={cx("contents")}>
          <ContentItem num={1} title={"test"} date={"2019-02-02"} views={12} />
          <ContentItem num={1} title={"test"} date={"2019-02-02"} views={12} />
          <ContentItem num={1} title={"test"} date={"2019-02-02"} views={12} />
          <ContentItem num={1} title={"test"} date={"2019-02-02"} views={12} />
        </div>
      </div>
      <div className={cx("bottom")}>
        <input />
        <button>검색</button>
      </div>
    </div>
  );
};

const ContentItem = ({ num, title, date, views }) => {
  return (
    <div className={cx("ContentItem-container")}>
      <span>{num}</span>
      <span>{title}</span>
      <span>{date}</span>
      <span>{views}</span>
    </div>
  );
};

export default Contents;
