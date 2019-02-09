import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import TitlePresenter from "Components/Title";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Contents = ({ goBackFn, noticesByTerm }) => {
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
          {noticesByTerm.map(notice => {
            return (
              <ContentItem
                num={notice.id}
                key={notice.id}
                title={notice.title}
                date={notice.updatedAt.substring(0, 10)}
                views={notice.views}
              />
            );
          })}
        </div>
      </div>
      <div className={cx("bottom")}>
        <button onClick={goBackFn}>돌아가기</button>
      </div>
    </div>
  );
};

const ContentItem = ({ num, title, date, views }) => {
  return (
    <div className={cx("ContentItem-container")}>
      <span>{num}</span>

      <span>
        <Link
          to={`/notice-detail/${num}`}
          style={{ textDecoration: "none" }}
          className={cx("link")}
        >
          {title}
        </Link>
      </span>

      <span>{date}</span>
      <span>{views}</span>
    </div>
  );
};

export default Contents;
