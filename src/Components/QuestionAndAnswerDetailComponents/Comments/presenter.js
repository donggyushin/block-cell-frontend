import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CommentsForQna = ({
  comments,
  text,
  _onSubmitButtonClicked,
  _onInputChange,
  _onEnterKeyPressed,
  user
}) => {
  return (
    <div className={cx("container")}>
      {user && (
        <div className={cx("input-container")}>
          <input
            value={text}
            onChange={_onInputChange}
            onKeyPress={_onEnterKeyPressed}
            placeholder={"댓글을 입력해주세요. "}
          />
          <button onClick={_onSubmitButtonClicked}>입력</button>
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

export default CommentsForQna;
