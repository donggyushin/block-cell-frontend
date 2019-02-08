import axios from "axios";

// action type

const GET_15_QNAS = "qna/GET_15_QNAS";
const GET_QNA_DETAIL = "qna/GET_QNA_DETAIL";

// create actions

const getQnaDetail = qna => {
  return {
    type: GET_QNA_DETAIL,
    qna
  };
};

export const get15Qnas = qnas => {
  return {
    type: GET_15_QNAS,
    qnas
  };
};

// axios actions

export const getPreviousQnaPageRequest = id => {
  axios
    .get(`/api/qna/previous/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const previousId = res.data.qna.id;
        window.location.href = `/question&answer-detail/${previousId}`;
      }
    })
    .catch(err => console.log(err));
};

export const getNextQnaPageRequest = id => {
  axios
    .get(`/api/qna/next/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const nextId = res.data.qna.id;
        window.location.href = `/question&answer-detail/${nextId}`;
      }
    })
    .catch(error => console.log(error));
};

export const postNewQnaRequest = (title, contents) => {
  axios
    .post(
      "/api/qna/",
      {
        title,
        contents
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
        window.location.href = "/question&answer/1";
      }
    })
    .catch(error => console.log(error));
};

export const getQnaDetailRequest = id => {
  return dispatch => {
    axios
      .get(`/api/qna/detail/${id}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const qna = res.data.qnaDetail;
          dispatch(getQnaDetail(qna));
        }
      })
      .catch(error => console.log(error));
  };
};

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
  qnas: null,
  qna: null
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_QNAS:
      return reducerGet15QNAS(state, action);
    case GET_QNA_DETAIL:
      return reducerGetQNAdetail(state, action);
    default:
      return state;
  }
}

// reducer actions
const reducerGetQNAdetail = (state, action) => {
  const { qna } = action;
  return {
    ...state,
    qna
  };
};

const reducerGet15QNAS = (state, action) => {
  const { qnas } = action;
  return {
    ...state,
    qnas
  };
};
