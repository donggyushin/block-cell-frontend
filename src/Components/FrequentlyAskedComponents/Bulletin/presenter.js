import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Molding from "Components/Molding";

const cx = classNames.bind(styles);

const Bulletin = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("korean-title")}>
          <span>자주 묻는 질문</span>
        </div>
        <div className={cx("english-subtitle")}>
          <span>FAQ</span>
        </div>
      </div>
      <div className={cx("notice")}>
        <div className={cx("notice-header")}>
          <div className={cx("num")}>
            <span>번호</span>
          </div>
          <div className={cx("title")}>
            <span>제목</span>
          </div>
          <div className={cx("created-at")}>
            <span>작성일</span>
          </div>
          <div className={cx("views")}>
            <span>조회수</span>
          </div>
        </div>
        <div className={cx("important-notice-container")}>
          <div className={cx("important-notice")}>
            <ImportantNotice
              title={"스카이 캐슬은 어떤 참혹한 결과를 맞을 것인가?"}
              createdAt={"2019-01-01"}
              views={1203342}
            />
          </div>
          <div className={cx("important-notice")}>
            <ImportantNotice
              title={"스카이 캐슬은 어떤 참혹한 결과를 맞을 것인가?"}
              createdAt={"2019-01-01"}
              views={1203342}
            />
          </div>
        </div>
        <div className={cx("normal-notice-container")}>
          <div className={cx("normal-notice")}>
            <NormalNotice
              num={1}
              title={"스카이 캐슬은 어떤 참혹한 결과를 맞을 것인가?"}
              createdAt={"2019-01-01"}
              views={123123}
            />
            <NormalNotice
              num={2}
              title={"스카이 캐슬은 어떤 참혹한 결과를 맞을 것인가?"}
              createdAt={"2019-01-01"}
              views={123123}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImportantNotice = ({ title, createdAt, views }) => {
  return (
    <div className={cx("important-item-container")}>
      <div className={cx("num")}>
        <span>공지</span>
      </div>
      <div className={cx("title")}>
        <Link to={"/notice-detail/1"} style={{ textDecoration: "none" }}>
          <span>{title}</span>
        </Link>
      </div>
      <div className={cx("created-at")}>
        <span>{createdAt}</span>
      </div>
      <div className={cx("views")}>
        <span>{views}</span>
      </div>
    </div>
  );
};
const NormalNotice = ({ num, title, createdAt, views }) => {
  return (
    <div className={cx("normal-item-container")}>
      <div className={cx("num")}>
        <span>{num}</span>
      </div>
      <div className={cx("title")}>
        <Link to={"/notice-detail/1"} style={{ textDecoration: "none" }}>
          <span>{title}</span>
        </Link>
      </div>
      <div className={cx("created-at")}>
        <span>{createdAt}</span>
      </div>
      <div className={cx("views")}>
        <span>{views}</span>
      </div>
    </div>
  );
};

export default Bulletin;
