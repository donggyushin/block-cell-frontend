import axios from "axios";

// action type

const GET_15_QNAS = "qna/GET_15_QNAS";

// create actions

export const get15Qnas = qnas => {
  return {
    type: GET_15_QNAS,
    qnas
  };
};

// axios actions

export const get15QnasRequest = page => {
  return dispatch => {
    axios
      .get(`/api/qna/${page}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const qnas = res.data.qnas;
          dispatch(get15Qnas(qnas));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// initial state

const initialState = {
  qnas: null
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_QNAS:
      return reducerGet15QNAS(state, action);

    default:
      return state;
  }
}

// reducer actions

const reducerGet15QNAS = (state, action) => {
  const { qnas } = action;
  return {
    ...state,
    qnas
  };
};
