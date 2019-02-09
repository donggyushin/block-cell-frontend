import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import TitlePresenter from "Components/Title";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Contents = ({ qnasByTerm, _goBack }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <TitlePresenter title={"묻고 답하기"} subTitle={"Q&A"} />
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>번호</span>
          <span>제목</span>
          <span>작성일</span>
          <span>조회수</span>
        </div>
        <div className={cx("contents")}>
          {qnasByTerm.map(qna => {
            return (
              <ContentItem
                key={qna.id}
                num={qna.id}
                title={qna.title}
                date={qna.updatedAt}
                views={qna.views}
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
        <Link className={cx("link")} to={`/question&answer-detail/${num}`}>
          {title}
        </Link>
      </span>
      <span>{date.substring(0, 10)}</span>
      <span>{views}</span>
    </div>
  );
};

export default Contents;
