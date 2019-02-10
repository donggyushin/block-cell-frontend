import axios from "axios";

// action type

const GET_COMMENTS = "commentForFaq/GET_COMMENTS";

// create actions

const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

// axios actions

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

    default:
      return state;
  }
}

// reducer functions

const reducerGetCommetsForFaq = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments
  };
};
