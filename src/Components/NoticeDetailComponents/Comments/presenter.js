import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CommentsForNotice = ({
  comments,
  text,
  _onEnterKeyPressed,
  _onChangeInput,
  _onClickSubmitButton,
  user
}) => {
  return (
    <div className={cx("container")}>
      {user && (
        <div className={cx("input-container")}>
          <input
            placeholder={"댓글을 입력해주세요. "}
            onKeyPress={_onEnterKeyPressed}
            onChange={_onChangeInput}
            value={text}
          />
          <button onClick={_onClickSubmitButton}>입력</button>
        </div>
      )}

      <div className={cx("comments-container")}>
        {comments.map(comment => {
          return (
            <Comment
              username={comment.user.username}
              text={comment.text}
              updatedAt={comment.createdAt.substring(0, 10)}
            />
          );
        })}
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

export default CommentsForNotice;
