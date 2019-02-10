import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";
import ReactHtmlParser from "react-html-parser";
import CommentsForQnaContainer from "../Comments";

const cx = classNames.bind(styles);

const ContentsPresenter = ({
  goBack,
  qna,
  _onClickNextButton,
  _onClickPreviousButton
}) => {
  const contents = ReactHtmlParser(qna.contents);
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("korean")}>
          <span>묻고 답하기</span>
        </div>
        <div className={cx("english")}>
          <span>Q&A</span>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <span>{qna.title}</span>
        </div>
        <div className={cx("info")}>
          <div className={cx("column")}>
            <span className={cx("left")}>작성자</span>&nbsp;|&nbsp;
            <span className={cx("right")}>{qna.user.username}</span>
          </div>
          <div className={cx("column")}>
            <span className={cx("left")}>작성일</span>&nbsp;|&nbsp;
            <span className={cx("right")}>
              {qna.updatedAt.substring(0, 10)}
            </span>
          </div>
        </div>
        <div className={cx("contents")}>
          <p>{contents}</p>
        </div>
      </div>
      <div className={cx("comments-container")}>
        <CommentsForQnaContainer qnaId={qna.id} />
      </div>
      <div className={cx("bottom")}>
        <div className={cx("row")}>
          <div className={cx("column")}>
            <i class="fas fa-chevron-left" />
            &nbsp;
            <span onClick={_onClickPreviousButton}>이전글</span>
          </div>
          <div className={cx("column")}>
            <span onClick={_onClickNextButton}>다음글</span>
            &nbsp;
            <i class="fas fa-chevron-right" />
          </div>
        </div>
        <div className={cx("row")}>
          <button onClick={goBack}>목록</button>
        </div>
      </div>
    </div>
  );
};

export default ContentsPresenter;
