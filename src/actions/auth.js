import axios from "axios";
import { returnError } from "./errors";
import { createMessage, create_api_message } from "./messages";

import {
  LOADING,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS_GOOGLE,
  LOGIN_SUCCESS_FACEBOOK,
  REGISTER_FAIL,
  VERIFY_CODE,
  VERIFY_FAIL,
  VERIFY_EMAIL,
  USER_RESET_PASSWORD,
  USER_RESET_PASSWORD_FAIL,
  USER_INITIATE_RESET,
  VERIFY_RESET_PASSWORD,
  VERIFY_RESET_PASSWORD_FAIL,
  USER_UPDATE,
  USER_UPDATE_FAIL,
  AWS_COGNITO_RESET,
  SENDING_SCREENING,
  SENT_SCREENING_SUCCESS,
  SENT_SCREENING_FAIL,
  FORM_LOADED,
  FORM_LOADING,


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

} from "./types";

// export const global_url = 'http://127.0.0.1:8000'
export const global_url = process.env.REACT_APP_API_URL

// LOAD USER
export const check_user_type = (username) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING_GET_USER_TYPE });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username });
  console.log(body)

  axios
    // .get(`${process.env.REACT_APP_API_URL}users/me/`, tokenConfig(getState))
    .post(`${global_url}/api/user_type_check/`, body, config)
    .then((res) => {
      localStorage.setItem('current_user_id', username)
      dispatch({
        type: GOT_USER_TYPE,
        payload: res.data.user_type,
      });
    })
    .catch((err) => {
      // dispatch(createMessage(err.response, null));
      console.log("Sorry, we couldn't identity your username.")
      dispatch({
        type: GOT_USER_TYPE_FAILED,
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
      "Content-Type": "application/json",
    },
  };
  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post(`${global_url}/api/login/`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response, null));
      // console.log(err.response)
      dispatch({
        type: LOGIN_FAIL,
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
  
  const message = "Your password has successfully been changed."
  axios
    .post(`${global_url}/api/auth/password/change/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
      dispatch(create_api_message(message, "change_password_success"));
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
      });
    });
};

// USER NOT ALLOWED TO VIEW SECTION
export const auth_message = () => (dispatch, getState) => {
  const message = "Your are not authorized to view data for this section, Contact the admin for more information."
  dispatch(create_api_message(message, "user_error_section_data_access"));
};
// LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // user Loading

  axios
    .get(`${global_url}/api/users/me/`, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response, null));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//  LOGOUT 
export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

// NOTIFY ON TIMEOUT
export const notify = () => (dispatch) => {
     dispatch(createMessage("Hey you have been idle, VIPPU automatically logged you out!"));
};





















// PET OWNER / PROVIDER UPDATE
export const updateUser = (update_user_body, id) => (dispatch, getState) => {
  // Loading
  //dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ update_user_body });
  axios
    .post(
      `https://stag-homepetvet.herokuapp.com/api/v1/user/update?id=${id}`,
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: USER_UPDATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: USER_UPDATE_FAIL,
      });
    });
};
// AMPLIFY REGISTRATION
export const aws_cognito_amplify_reg = ({
  full_name,
  email,
  password,
  password_confirmation,
  account_type,
}) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // localStorage.setItem("email_aws", email);
  // Auth.signUp({
  //   username: email,
  //   password: password,
  //   attributes: {
  //     email: email,
  //     phone_number: "+12135555555",
  //     "custom:account_type": account_type,
  //     "custom:full_name": full_name,
  //     "custom:keyword": password_confirmation,
  //   },
  // })
  //   .then((res) => {
  //     console.log("signing up...");
  //     dispatch({
  //       type: AWS_COGNITO_REGISTER,
  //       payload: res,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //     });
  //   });
};

// AMPLIFY SOCIAL REGISTRATION
export const aws_cognito_amplify_reg_social = ({
  full_name,
  email,
  password,
  password_confirmation,
  account_type,
}) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // localStorage.setItem("email_aws", email);
  // Auth.signUp({
  //   username: email,
  //   password: password,
  //   attributes: {
  //     email: email,
  //     phone_number: "+12135555555",
  //     "custom:account_type": account_type,
  //     "custom:full_name": full_name,
  //     "custom:keyword": password_confirmation,
  //   },
  // })
  //   .then((res) => {
  //     console.log("signing up with google...");
  //     dispatch({
  //       type: AWS_COGNITO_REGISTER_SOCIAL,
  //       payload: res,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //     });
  //   });
};

// AMPLIFY VERIFICATION
export const aws_cognito_amplify_verify = (code) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // const email_aws = localStorage.getItem("email_aws");
  // let currentUser;
  // Auth.confirmSignUp(email_aws, code)
  //   .then((res) => {
  //     console.log("verifying code...");
  //     console.log(res);
  //     if (res) {
  //       // Activate user registration in rails backend
  //       dispatch({
  //         type: USER_REGISTER,
  //       });
  //     }
  //     dispatch({
  //       type: AWS_COGNITO_VERIFY_CODE,
  //       payload: res,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //     });
  //     // console.log(err)
  //   });
};

// AMPLIFY RESEND CODE
export const aws_cognito_amplify_resend = () => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // const email_aws = localStorage.getItem("email_aws");
  // Auth.resendSignUp(email_aws)
  //   .then((res) => {
  //     console.log("resending code...");
  //     dispatch(returnError(res, null));
  //     dispatch({
  //       type: AWS_COGNITO_RESEND_CODE,
  //       payload: res,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //     });
  //     // console.log(err)
  //   });
};

// AMPLIFY RESET PASSWORD VERIFY
export const aws_cognito_reset = (email) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // Auth.forgotPassword(email)
  //   .then((res) => {
  //     if (res) {
  //       localStorage.setItem("email_reset_pass", email);
  //     }
  // dispatch({
  //   type: AWS_COGNITO_RESET,
  //   payload: res,
  // });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_UPDATE_FAIL,
  //     });
  //     // console.log(err)
  //   });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}auth/password/request/reset/`,
      body,
      config
    )
    .then((res) => {
      console.log("Requesting Password Reset ...");
      if (res.data) {
        localStorage.setItem("email_reset_pass", email);
      }
      dispatch({
        type: AWS_COGNITO_RESET,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: USER_UPDATE_FAIL,
      });
    });
};

// AMPLIFY RESET PASSWORD
export const aws_cognito_reset_confirm = (email, code, new_password) => (
  dispatch
) => {
  //Loading
  dispatch({ type: LOADING });

  // Auth.forgotPasswordSubmit(email, code, new_password)
  //   .then((res) => {
  //     console.log("Submitting change password request to cognito...");
  //     dispatch({
  //       type: RESET_PASSWORD_RAILS,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch(returnError(err, null));
  //     dispatch({
  //       type: USER_RESET_PASSWORD_FAIL,
  //     });
  //     // console.log(err)
  //   });
};

// PET PROVIDER / OWNER FORGOT PASSOWARD
export const forgot_password = (email_for_reset, password_conf) => (
  dispatch
) => {
  // Loading
  dispatch({ type: LOADING });

  axios
    .post(
      `https://stag-homepetvet.herokuapp.com/api/v1/user/forgot?email=${email_for_reset}&new_password=${password_conf}`
    )
    .then((res) => {
      console.log("Submitting change password request in rails backend...");
      dispatch(returnError(res.data, res.status));
      if (res.data) {
        localStorage.setItem("email_login", email_for_reset);
      }
      dispatch({
        type: USER_RESET_PASSWORD,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        // Error
        dispatch({ type: USER_RESET_PASSWORD_FAIL });
        dispatch(returnError(err.response.data, err.response.status));
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
};

// REGISTER PET PROVIDER / OWNER
export const register = ({
  first_name,
  last_name,
  email,
  password,
  account_type,
}) => (dispatch) => {
  // //Loading
  dispatch({ type: LOADING });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
    account_type,
  });
  axios
    .post(`${process.env.REACT_APP_API_URL}signup/`, body, config)
    .then((res) => {
      // console.log("Registered...");
      if (res.data) {
        localStorage.setItem("email_login", email);
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(
        createMessage("Check your email and click the link to activate Account. Please check your junk or spam folder if you do not see the e-mail in your specified inbox.")
      );
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//  VERIFY PET PROVIDER / OWNER'S EMAILs
export const verify_email = (email) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });
  //503311
  axios
    .get(
      `https://stag-homepetvet.herokuapp.com/api/v1/user/resend?email=${email}`
    )
    .then((res) => {
      dispatch(returnError(res.data, res.status));
      dispatch({
        type: VERIFY_EMAIL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      // Error
      dispatch({ type: VERIFY_FAIL });
    });
};

//  VERIFY PET PROVIDER / OWNER'S EMAIL CODE
export const verify = (email, email_code, timestamp) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });
  // if(email === null || email === undefined){
  // 	email = localStorage.getItem('email_temp')
  // }

  axios
    .get(
      `https://stag-homepetvet.herokuapp.com/api/v1/user/confirm?email_code=${email_code}&email=${email}&current_datetime=${timestamp}`
    )
    .then((res) => {
      console.log(res.data);
      dispatch(returnError(res.data, res.status));
      dispatch({
        type: VERIFY_CODE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      // Error
      dispatch({ type: VERIFY_FAIL });
    });
};

//  VERIFY PET PROVIDER / OWNER'S EMAIL CODE UPON RESET PASSWORD
export const verify_reset = (email, email_code, timestamp) => (dispatch) => {
  // Loading
  dispatch({ type: LOADING });

  // if(email === null || email === undefined){
  // 	email = localStorage.getItem('email_temp')
  // }

  axios
    .get(
      `https://stag-homepetvet.herokuapp.com/api/v1/user/confirm?email_code=${email_code}&email=${email}&current_datetime=${timestamp}`
    )
    .then((res) => {
      dispatch(returnError(res.data, res.status));
      dispatch({
        type: VERIFY_RESET_PASSWORD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      // Error
      dispatch({ type: VERIFY_RESET_PASSWORD_FAIL });
    });
};

// PET PROVIDER / OWNER INITIATE RESET
export const initiate_reset = () => (dispatch) => {
  // Loading
  dispatch({ type: USER_INITIATE_RESET });
};


//  LOGIN PET PROVIDER / OWNER WITH GOOGLE
export const login_google = (googleObject) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  axios
    .post(`${process.env.REACT_APP_API_URL}login/google/`, {
      access_token: googleObject.accessToken,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("email_login", googleObject.profileObj.email);
      }
      // console.log("Flag: ")
      // console.log(res.data)
      dispatch({
        type: LOGIN_SUCCESS_GOOGLE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: USER_UPDATE_FAIL,
      });
    });
};

//  LOGIN PET PROVIDER / OWNER WITH FACEBOOK
export const login_facebook = (facebook_Oject) => (dispatch) => {
  //Loading
  dispatch({ type: LOADING });

  // Body
  axios
    .post(`${process.env.REACT_APP_API_URL}login/facebook/`, {
      access_token: facebook_Oject.accessToken,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("email_login", facebook_Oject.email);
      }
      dispatch({
        type: LOGIN_SUCCESS_FACEBOOK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: USER_UPDATE_FAIL,
      });
    });
};

export const resetPass = (code, password) => (dispatch, getState) => {
  dispatch({ type: LOADING });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = { code, password };

  axios
    .post(`${process.env.REACT_APP_API_URL}auth/password/reset/`, body, config)
    .then((res) => {
      console.log("Submitting change password request in dJANGO backend...");
      dispatch({
        type: USER_RESET_PASSWORD,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        // Error
        console.log("FAILED change password to dJANGO backend");
        dispatch({ type: USER_RESET_PASSWORD_FAIL });
        dispatch(returnError(err.response.data, err.response.status));
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
};

//Background Screening Function
export const screening = (user_id) => (dispatch, getState) => {
  dispatch({ type: SENDING_SCREENING });
  dispatch({ type: FORM_LOADING });

  axios
    .post(
      `${process.env.REACT_APP_API_URL}screenings/`,
      user_id,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: SENT_SCREENING_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: FORM_LOADED });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: SENT_SCREENING_FAIL });
      dispatch({ type: FORM_LOADED });
    });
};

// setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  //console.log(token)

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token, add to headers in config
  if (token) {
    config.headers["Authorization"] = `JWT ${token}`;
  }
  return config;
};
