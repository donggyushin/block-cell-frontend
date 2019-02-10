import axios from "axios";

// action type

const GET_COMMENTS = "commentForNotice/GET_COMMENTS";
const POST_COMMENT = "commentForNotice/POST_COMMENT";

// create actions

const postComment = comment => {
  return {
    type: POST_COMMENT,
    comment
  };
};

const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

// axios actions
export const PostCommentForNoticeReuqest = (noticeId, text) => {
  return dispatch => {
    axios
      .post(
        `/api/comment-for-notice/${noticeId}`,
        {
          text
        },
        {
          headers: {
            "X-JWT": localStorage.getItem("jwt")
          }
        }
      )
      .then(res => {
        console.log(res);
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const comment = res.data.comment;
          dispatch(postComment(comment));
        }
      })
      .catch(err => console.log(err));
  };
};

export const GetCommentsRequest = noticeId => {
  return dispatch => {
    axios
      .get(`/api/comment-for-notice/${noticeId}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const comments = res.data.comments;
          dispatch(getComments(comments));
        }
      })
      .catch(err => console.log(err));
  };
};

// initial state

const initialState = {
  comments: null,
  newComment: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return reducerGetComments(state, action);

    case POST_COMMENT:
      return reducerPostNewComment(state, action);

    default:
      return state;
  }
}

//reducer actions;

const reducerPostNewComment = (state, action) => {
  const { comment } = action;
  return {
    ...state,
    comments: [...state.comments, comment]
  };
};

const reducerGetComments = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments
  };
};
