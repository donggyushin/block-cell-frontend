import axios from "axios";

// action type

const GET_15_NOTICES = "notice/GET_15_NOTICES";

// create actions

export const get15Notices = notices => {
  return {
    type: GET_15_NOTICES,
    notices
  };
};

// axios actions

export const get15NoticesRequest = page => {
  return dispatch => {
    axios
      .get(`/api/notice/${page}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const notices = res.data.notices;
          dispatch(get15Notices(notices));
        }
      })
      .catch(error => console.log(error));
  };
};

// initial state
const initialState = {
  notices: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_NOTICES:
      return reducerGet15Notices(state, action);

    default:
      return state;
  }
}

// reducer actions

const reducerGet15Notices = (state, action) => {
  const { notices } = action;
  return {
    ...state,
    notices
  };
};
