import axios from "axios";

// action type

const GET_COMMENTS = "commentForNotice/GET_COMMENTS";

// create actions

const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

// axios actions

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
  comments: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return reducerGetComments(state, action);

    default:
      return state;
  }
}

//reducer actions;

const reducerGetComments = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments
  };
};
