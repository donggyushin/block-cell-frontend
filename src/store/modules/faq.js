import axios from "axios";

// action type

const GET_15_FAQS = "faq/GET_15_FAQS";

// create actions
export const get15Faqs = faqs => {
  return {
    type: GET_15_FAQS,
    faqs
  };
};

// axios actions

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
  faqs: null
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_15_FAQS:
      return reducerGet15FQAS(state, action);

    default:
      return state;
  }
}

// reducer actions

const reducerGet15FQAS = (state, action) => {
  const { faqs } = action;
  return {
    ...state,
    faqs
  };
};
