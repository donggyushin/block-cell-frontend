import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CommentsForQna = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("input-container")}>
        <input placeholder={"댓글을 입력해주세요. "} />
        <button>입력</button>
      </div>
      <div className={cx("comments-container")}>
        <Comment
          username={"123213"}
          text={
            "asdasdasdjlkdsaljkdsaljkadsjlkdsajlkdsajlkadsjlkadsjlkdasjlkdsajkldsajlkdsajkldsajlkdasljksad"
          }
          updatedAt={"2018-02-02"}
        />
        <Comment
          username={"123213"}
          text={"asdasdsad"}
          updatedAt={"2018-02-02"}
        />
        <Comment
          username={"123213"}
          text={"asdasdsad"}
          updatedAt={"2018-02-02"}
        />
        <Comment
          username={"123213"}
          text={"asdasdsad"}
          updatedAt={"2018-02-02"}
        />
      </div>
    </div>
  );
};

const Comment = ({ username, text, updatedAt }) => {
  return (
    <div className={cx("comment")}>
      <div className={cx("span")}>{username}</div>
      <div className={cx("span")}>{text}</div>
      <div className={cx("span")}>{updatedAt}</div>
    </div>
  );
};

export default CommentsForQna;
