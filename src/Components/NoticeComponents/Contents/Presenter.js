import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import TitlePresenter from "Components/Title";

const cx = classNames.bind(styles);

const Presenter = ({ admin, notices }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        {/* <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("korean-title")}>
          <span>공지사항</span>
        </div>
        <div className={cx("english-subtitle")}>
          <span>Notice</span>
        </div> */}
        <TitlePresenter title={"공지사항"} subTitle={"Notice"} />
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
              title={"블럭셀은 어떤 회사인가요?"}
              createdAt={"2019-01-01"}
              views={17}
              id={"as2"}
            />
          </div>
          <div className={cx("important-notice")}>
            <ImportantNotice
              title={"주력 사업은 무엇인가요?"}
              createdAt={"2019-01-01"}
              views={9}
              id={"as3"}
            />
          </div>
        </div>
        <div className={cx("normal-notice-container")}>
          <div className={cx("normal-notice")}>
            {/* <NormalNotice
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
            /> */}
            {notices.map(notice => {
              const createdAt = notice.createdAt.substring(0, 10);
              return (
                <NormalNotice
                  key={notice.id}
                  views={notice.views}
                  title={notice.title}
                  createdAt={createdAt}
                  num={notice.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={cx("button-container")}>
        {admin && (
          <div>
            <Link to={"/notice-writer"} style={{ textDecoration: "none" }}>
              <button>작성하기</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const ImportantNotice = ({ title, createdAt, views, id }) => {
  return (
    <div className={cx("important-item-container")}>
      <div className={cx("num")}>
        <span>공지</span>
      </div>
      <div className={cx("title")}>
        <Link
          to={`/notice-detail/${id}`}
          className={cx("link")}
          style={{ textDecoration: "none" }}
        >
          {title}
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
        <Link to={`/notice-detail/${num}`} style={{ textDecoration: "none" }}>
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

export default Presenter;
