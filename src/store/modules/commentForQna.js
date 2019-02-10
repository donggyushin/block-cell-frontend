import axios from "axios";

// action type

const GET_COMMENTS = "commentForQna/GET_COMMENTS";
const POST_COMMENT = "commentForQna/POST_COMMENT";

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
export const postCommentForQnaRequest = (qnaId, text) => {
  return dispatch => {
    axios
      .post(
        `/api/comment-for-qna/${qnaId}`,
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

export const getCommentsForQnaRequest = qnaId => {
  return dispatch => {
    axios
      .get(`/api/comment-for-qna/${qnaId}`)
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
  comments: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return reducerGetComments(state, action);
    case POST_COMMENT:
      return reducerPostComment(state, action);
    default:
      return state;
  }
}

// reducer functions

const reducerPostComment = (state, action) => {
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
