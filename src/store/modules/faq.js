import axios from "axios";

// action type

const GET_15_FAQS = "faq/GET_15_FAQS";
const GET_FAQ_DETAIL = "faq/GET_FAQ_DETAIL";

// create actions
const getFaqDetail = faq => {
  return {
    type: GET_FAQ_DETAIL,
    faq
  };
};

export const get15Faqs = faqs => {
  return {
    type: GET_15_FAQS,
    faqs
  };
};

// axios actions

export const getPreviousFaqPageRequest = id => {
  axios
    .get(`/api/faq/previous/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const previousId = res.data.faq.id;
        window.location.href = `/frequently-asked-detail/${previousId}`;
      }
    })
    .catch(err => console.log(err));
};

export const getNextFaqPageRequest = id => {
  axios
    .get(`/api/faq/next/${id}`)
    .then(res => {
      if (!res.data.ok) {
        alert(res.data.error);
      } else {
        const nextId = res.data.faq.id;
        window.location.href = `/frequently-asked-detail/${nextId}`;
      }
    })
    .catch(err => console.log(err));
};

export const postNewFaqRequest = (title, contents) => {
  axios
    .post(
      "/api/faq/",
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
        window.location.href = "/frequently-asked/1";
      }
    })
    .catch(error => console.log(error));
};

export const getFaqDetailRequest = id => {
  return dispatch => {
    axios
      .get(`/api/faq/detail/${id}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const faq = res.data.faqDetail;
          dispatch(getFaqDetail(faq));
        }
      })
      .catch(error => console.log(error));
  };
};

export const get15FaqsRequest = page => {
  return dispatch => {
    axios
      .get(`/api/faq/${page}`)
      .then(res => {
        if (!res.data.ok) {
          alert(res.data.error);
        } else {
          const faqs = res.data.faqs;
          dispatch(get15Faqs(faqs));
        }
      })
      .catch(error => console.log(error));
  };
};

// initial state

const initialState = {
  faqs: null,
  faq: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_FAQS:
      return reducerGet15FQAS(state, action);
    case GET_FAQ_DETAIL:
      return reducerGetFAQdetail(state, action);
    default:
      return state;
  }
}

// reducer actions

const reducerGetFAQdetail = (state, action) => {
  const { faq } = action;
  return {
    ...state,
    faq
  };
};

const reducerGet15FQAS = (state, action) => {
  const { faqs } = action;
  return {
    ...state,
    faqs
  };
};
