import axios from 'axios';
import { returnError } from './errors';
import { createMessage, create_api_message } from './messages';

import {
  LOADING_GET_USER_TYPE,
  GOT_USER_TYPE,
  GOT_USER_TYPE_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGOUT_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL
} from './types';

export const global_url = 'https://vippu-api.herokuapp.com';
// export const global_url_local = ' http://127.0.0.1:8000 https://vippu-api.herokuapp.com' 

// LOAD USER
export const check_user_type = (username) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING_GET_USER_TYPE });

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ username });
  console.log(body);

  axios
    // .get(`${process.env.REACT_APP_API_URL}users/me/`, tokenConfig(getState))
    .post(`${global_url}/api/user_type_check/`, body, config)
    .then((res) => {
      localStorage.setItem('current_user_id', username);
      dispatch({
        type: GOT_USER_TYPE,
        payload: res.data.user_type
      });
    })
    .catch((err) => {
      // dispatch(createMessage(err.response, null));
      console.log("Sorry, we couldn't identity your username.");
      dispatch({
        type: GOT_USER_TYPE_FAILED
      });
    });
};

//  LOGIN
export const login = (username, password) => (dispatch) => {
  //Loading
  dispatch({ type: LOGIN_LOADING });

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post(`${global_url}/api/login/`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response, null));
      // console.log(err.response)
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// CHANGE PASSWORD
export const change_password = (old_password, new_password) => (dispatch, getState) => {
  //Loading
  dispatch({ type: CHANGE_PASSWORD_LOADING });

  // Request Body
  const body = JSON.stringify({ old_password, new_password });
  // console.log(body)

  const message = 'Your password has successfully been changed.';
  axios
    .post(`${global_url}/api/auth/password/change/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS
      });
      dispatch(create_api_message(message, 'change_password_success'));
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: CHANGE_PASSWORD_FAIL
      });
    });
};

// USER NOT ALLOWED TO VIEW SECTION
export const auth_message = () => (dispatch, getState) => {
  const message =
    'Your are not authorized to view data for this section, Contact the admin for more information.';
  dispatch(create_api_message(message, 'user_error_section_data_access'));
};
// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // user Loading

  axios
    .get(`${global_url}/api/users/me/`, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response, null));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//  LOGOUT
export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// NOTIFY ON TIMEOUT
export const notify = () => (dispatch) => {
  dispatch(createMessage('Hey you have been idle, VIPPU automatically logged you out!'));
};

// setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  //console.log(token)

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // if token, add to headers in config
  if (token) {
    config.headers['Authorization'] = `JWT ${token}`;
  }
  return config;
};
