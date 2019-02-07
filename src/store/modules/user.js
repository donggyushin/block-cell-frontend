import axios from "axios";

// action type

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const NEW_ACCOUNT = "user/NEW_ACCOUNT";
const OPEN_MODAL = "user/OPEN_MODAL";

// create actions

export const openModal = error => {
  return {
    type: OPEN_MODAL,
    error
  };
};

export const login = token => {
  return {
    type: LOGIN,
    token
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const newAccount = () => {
  return {
    type: NEW_ACCOUNT
  };
};

// axios actions

export const newAccountRequest = (username, password1, password2) => {
  return dispatch => {
    axios
      .post("/api/authentication/new-account", {
        username,
        password1,
        password2
      })
      .then(res => {
        if (!res.data.ok) {
          dispatch(openModal(res.data.error));
        } else {
          window.location.href = "/";
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const loginRequest = (username, password) => {
  return dispatch => {
    axios
      .post("/api/authentication/login", {
        username,
        password
      })
      .then(res => {
        if (!res.data.ok) {
          dispatch(openModal(res.data.error));
        } else {
          const token = res.data.jwt;
          dispatch(login(token));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  user: null,
  open: false,
  error: ""
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return reducerLogin(state, action);
    case LOGOUT:
      return reducerLogout(state, action);
    case OPEN_MODAL:
      return reducerOpenModal;
    default:
      return state;
  }
}

// reducer actions
const reducerOpenModal = (state, action) => {
  const { error } = action;
  return {
    ...state,
    open: true,
    error
  };
};

const reducerLogin = (state, action) => {
  const { token } = action;
  localStorage.setItem("jwt", token);
  window.location.href = "/";
  return {
    ...state,
    isLoggedIn: true
  };
};

const reducerLogout = (state, action) => {
  localStorage.removeItem("jwt");
  window.location.href = "/";
  return {
    ...state,
    isLoggedIn: false
  };
};
