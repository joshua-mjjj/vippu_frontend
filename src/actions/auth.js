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
  CHANGE_PASSWORD_FAIL,
  ADMIN_REQUEST_ACCESS_LOADING,
  ADMIN_REQUEST_ACCESS_SUCCESS,
  ADMIN_REQUEST_ACCESS_FAIL
} from './types';


export const global_url = process.env.REACT_APP_API_URL;
// export const global_url_local = 'http://127.0.0.1:8000 ' 
// export const global_url_local = 'https://vippu-api.herokuapp.com' 

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
    .post(`${global_url}/user_type_check/`, body, config)
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


//  LOGIN PET PROVIDER / OWNER WITH GOOGLE
export const login_google = (googleObject) => (dispatch) => {
  //Loading
  console.log(googleObject)

  axios
    .post("http://127.0.0.1:8000/source/login/google/", {
      access_token: googleObject.accessToken
    })
    .then((res) => {
      console.log("Flag: ")
      console.log(res.data)
      // dispatch({
      //   type: LOGIN_SUCCESS_GOOGLE,
      //   payload: res.data
      // });
    })
    .catch((err) => {
      console.log(err)
      // dispatch({
      //   type: USER_UPDATE_FAIL
      // });
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
    .post(`${global_url}/login/`, body, config)
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
    .post(`${global_url}/auth/password/change/`, body, tokenConfig(getState))
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

// export const sendUserData = (data, user_id) => async (dispatch, getState) => {
//   //dispatch({ type: FORM_LOADING });
//   dispatch({ type: FORM_LOADING_DATA });

//   await axios
//     .patch(`${process.env.REACT_APP_API_URL}users/${user_id}/`, data, tokenConfig(getState))
//     .then((res) => {
//       dispatch({ type: SENDING_DATA });
//       // console.log("Done")
//       dispatch({ type: FORM_LOADED_DATA });
//       dispatch({ type: GO_TO_NEXT });
//     })
//     .catch((e) => {
//       dispatch({ type: FORM_LOADED_DATA });
//       dispatch(returnError(e.response.data, e.response.status));
//       console.log(e);
//     });
// };

// ADMIN GRANT OTHER DASHBOARDS ACCESS
export const grant_access = (admin_request_access, admin_request_battalion, user_id) => async (dispatch, getState) => {
  //Loading
  dispatch({ type: ADMIN_REQUEST_ACCESS_LOADING });

  // Request Body
  const body = JSON.stringify({ admin_request_access, admin_request_battalion });
  console.log(body)

  await axios
    .patch(`${process.env.REACT_APP_API_URL}/users/${user_id}/`, body, tokenConfig(getState))
    .then((res) => {
      if(res.data.admin_request_access === true){
        dispatch({
          type: ADMIN_REQUEST_ACCESS_SUCCESS
        });
      }
    })
    .catch((e) => {
       dispatch({
          type: ADMIN_REQUEST_ACCESS_FAIL
        });
      console.log(e);
    });


  // const message = 'Your password has successfully been changed.';
  // await axios
  //   .post(`${global_url}/auth/password/change/`, body, tokenConfig(getState))
  //   .then((res) => {
  //     dispatch({
  //       type: ADMIN_REQUEST_ACCESS_SUCCESS
  //     });
  //     dispatch(create_api_message(message, 'change_password_success'));
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err.response.data, err.response.status));
  //     dispatch({
  //       type: ADMIN_REQUEST_ACCESS_FAIL
  //     });
  //   });
};

// USER NOT ALLOWED TO VIEW SECTION
export const auth_message = (key_word) => (dispatch, getState) => {
  const message =
    `Your are not authorized to view data for this ${key_word}, Contact the admin for more information.`;
  dispatch(create_api_message(message, 'user_error_section_data_access'));
};
// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // user Loading

  axios
    .get(`${global_url}/users/me/`, tokenConfig(getState))

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
