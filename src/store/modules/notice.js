import axios from "axios";

// action type

const GET_15_NOTICES = "notice/GET_15_NOTICES";
const GET_NOTICE_DETAIL = "notice/GET_NOTICE_DETAIL";
const GET_NOTICE_BY_TERM = "notice/GET_NOTICE_BY_TERM";

// create actions

const getNoticeByTerm = noticesByTerm => {
  return {
    type: GET_NOTICE_BY_TERM,
    noticesByTerm
  };
};

const getNoticeDetail = notice => {
  return {
    type: GET_NOTICE_DETAIL,
    notice
  };
};

export const get15Notices = notices => {
  return {
    type: GET_15_NOTICES,
    notices
  };
};

// axios actions
export const GetNoticesByTermRequest = searchValue => {
  return dispatch => {
    axios
      .get(`/api/notice/search/${searchValue}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const noticesByTerm = res.data.notices;
          dispatch(getNoticeByTerm(noticesByTerm));
        }
      })
      .catch(err => console.log(err));
  };
};

export const getPreviousNoticePageRequest = id => {
  axios
    .get(`/api/notice/previous/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const previousId = res.data.notice.id;
        window.location.href = `/notice-detail/${previousId}`;
      }
    })
    .catch(err => console.log(err));
};

export const getNextNoticePageRequest = id => {
  axios
    .get(`/api/notice/next/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const nextId = res.data.notice.id;
        window.location.href = `/notice-detail/${nextId}`;
      }
    })
    .catch(error => console.log(error));
};

export const postNewNoticeRequest = (title, contents) => {
  return dispatch => {
    axios
      .post(
        "/api/notice/",
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
          console.log(res.data);
          alert(res.data.error);
        } else {
          window.location.href = "/notice/1";
        }
      })
      .catch(error => console.log(error));
  };
};

export const getNoticeDetailRequest = id => {
  return dispatch => {
    axios
      .get(`/api/notice/detail/${id}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const notice = res.data.noticeDetail;
          dispatch(getNoticeDetail(notice));
        }
      })
      .catch(error => console.log(error));
  };
};

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
  notices: null,
  notice: null,
  noticesByTerm: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_NOTICES:
      return reducerGet15Notices(state, action);
    case GET_NOTICE_DETAIL:
      return reducerGetNoticeDetail(state, action);
    case GET_NOTICE_BY_TERM:
      return reducerGetNoticesByTerm(state, action);
    default:
      return state;
  }
}

// reducer actions
const reducerGetNoticesByTerm = (state, action) => {
  const { noticesByTerm } = action;
  return {
    ...state,
    noticesByTerm
  };
};

const reducerGetNoticeDetail = (state, action) => {
  const { notice } = action;
  return {
    ...state,
    notice
  };
};

const reducerGet15Notices = (state, action) => {
  const { notices } = action;
  return {
    ...state,
    notices
  };
};
