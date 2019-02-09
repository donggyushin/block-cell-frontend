import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import TitlePresenter from "Components/Title";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Contents = ({ faqsByTerm, _goBack }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <TitlePresenter title={"자주 묻는 질문"} subTitle={"FAQ"} />
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>번호</span>
          <span>제목</span>
          <span>작성일</span>
          <span>조회수</span>
        </div>
        <div className={cx("contents")}>
          {faqsByTerm.map(faq => {
            return (
              <ContentItem
                num={faq.id}
                key={faq.id}
                title={faq.title}
                date={faq.updatedAt.substring(0, 10)}
                views={faq.views}
              />
            );
          })}
        </div>
      </div>
      <div className={cx("bottom")}>
        <button onClick={_goBack}>돌아가기</button>
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
          className={cx("link")}
          style={{ textDecoration: "none" }}
          to={`/frequently-asked-detail/${num}`}
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
