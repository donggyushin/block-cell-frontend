import axios from "axios";

// action type

const GET_COMMENTS = "commentForFaq/GET_COMMENTS";
const POST_COMMENT = "commentForFaq/POST_COMMENT";

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
export const PostCommentForFaqRequest = (faqId, text) => {
  return dispatch => {
    axios
      .post(
        `/api/comment-for-faq/${faqId}`,
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
          const newComment = res.data.comment;
          dispatch(postComment(newComment));
        }
      })
      .catch(err => console.log(err));
  };
};

export const GetCommentsForFaqRequest = faqId => {
  return dispatch => {
    axios
      .get(`/api/comment-for-faq/${faqId}`)
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
      return reducerGetCommetsForFaq(state, action);
    case POST_COMMENT:
      return reducerPostNewCommentForFaq(state, action);
    default:
      return state;
  }
}

// reducer functions
const reducerPostNewCommentForFaq = (state, action) => {
  const { comment } = action;
  return {
    ...state,
    comments: [...state.comments, comment]
  };
};

const reducerGetCommetsForFaq = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments
  };
};
