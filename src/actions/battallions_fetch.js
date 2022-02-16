import axios from 'axios';
import { returnError } from './errors';
import { create_api_message } from './messages';

import {
  BATTALION_TWO_DATA_FETCHED,
  BATTALION_TWO_DATA_LOADING,
  BATTALION_TWO_OVERRALL_FETCHED,
  BATTALION_ONE_OVERRALL_FETCHED,
  BATTALION_THREE_OVERRALL_FETCHED,
  BATTALION_FOUR_OVERRALL_FETCHED,
  BATTALION_FIVE_OVERRALL_FETCHED,
  BATTALION_SIX_OVERRALL_FETCHED,
  BATTALION_TWO_QUERY_LOADING,
  BATTALION_SECTION_QUERY_LOADING,
  BATTALION_SECTION_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FAILED,
  BATTALION_ONE_DATA_LOADING,
  BATTALION_ONE_DATA_FETCHED,
  BATTALION_THREE_DATA_LOADING,
  BATTALION_THREE_DATA_FETCHED,
  BATTALION_FOUR_DATA_FETCHED,
  BATTALION_FOUR_DATA_LOADING,
  BATTALION_FIVE_DATA_LOADING,
  BATTALION_FIVE_DATA_FETCHED,
  BATTALION_SIX_DATA_LOADING,
  BATTALION_SIX_DATA_FETCHED,
  BATTALION3_DEPARTEMENT_QUERY_LOADING,
  BATTALION3_DEPARTEMENT_QUERY_FETCHED,
  BATTALION3_DEPARTEMENT_QUERY_FAILED,

  BATTALION_GENERAL_DEPARTEMENT_QUERY_LOADING,
  BATTALION_GENERAL_DEPARTEMENT_QUERY_FETCHED,
  BATTALION_GENERAL_DEPARTEMENT_QUERY_FAILED

} from './types';

import { tokenConfig, global_url } from './auth';

//  BATTALLION TWO CREATE
export const battallion_two_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_two/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_TWO_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_TWO_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION TWO CREATE
export const battallion_one_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_ONE_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_one/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_ONE_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_ONE_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION THREE CREATE
export const battallion_three_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_THREE_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_three/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_THREE_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_THREE_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION FIVE CREATE
export const battallion_five_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_FIVE_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_five/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_FIVE_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_FIVE_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION SIX CREATE
export const battallion_six_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_SIX_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_six/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_SIX_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_SIX_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION FOUR CREATE
export const battallion_four_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_FOUR_DATA_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_four/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data.results) {
        dispatch({
          type: BATTALION_FOUR_DATA_FETCHED,
          payload: res.data.results
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_FOUR_DATA_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION TWO CREATE
export const battallion_two_query = (file_number) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ file_number });
  // console.log(body)

  const error_message =
    "Employee with this file number doesn't exit in the database, please try again with a valid file number.";
  axios
    .post(`${global_url}/battalionquery_two/`, body, tokenConfig(getState))
    .then((res) => {
      if (res.data) {
        // console.log(res.data)
        dispatch({
          type: BATTALION_TWO_QUERY_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, 'battallion_query_fail'));
      dispatch({ type: BATTALION_TWO_QUERY_FAILED });
    });
};

//  BATTALLION TWO CREATE
export const battallion_three_query = (file_number, department, low_level_incharge, url) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ file_number });
  // console.log(body)

  // console.log(low_level_incharge);
  // console.log(department);

  const error_message =
      "Employee with this file number doesn't exit in the database, please try again with a valid file number.";
  const error_message2 =
    'Your are not authorized to view data for this employee, Contact the admin for more information.';
  axios
    .post(`${global_url}/${url}/`, body, tokenConfig(getState))
    .then((res) => {
     if (res.data) {
       // console.log(res.data)
       if (low_level_incharge === true) {
          // restricting search for In charges to departments they are allowed to access
          if (res.data.department === department) {
            dispatch({
              type: BATTALION_TWO_QUERY_FETCHED,
              payload: res.data
            });
          } else {
            dispatch(create_api_message(error_message2, 'battallion_query_fail'));
            dispatch({ type: BATTALION_TWO_QUERY_FAILED });
          }
        } else {
          dispatch({
            type: BATTALION_TWO_QUERY_FETCHED,
            payload: res.data
          });
        }
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, 'battallion_query_fail'));
      dispatch({ type: BATTALION_TWO_QUERY_FAILED });
    });
};

//  BATTALLION ONE CREATE
export const battallion_one_query =
  (file_number, section, low_level_incharge) => (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALION_TWO_QUERY_LOADING });

    console.log(low_level_incharge);
    console.log(section);

    // Request Body
    const body = JSON.stringify({ file_number });
    // console.log(body)

    const error_message =
      "Employee with this file number doesn't exit in the database, please try again with a valid file number.";
    const error_message2 =
      'Your are not authorized to view data for this employee, Contact the admin for more information.';
    axios
      .post(`${global_url}/battalionquery_one/`, body, tokenConfig(getState))
      .then((res) => {
        if (res.data) {
          // console.log(res.data)
          if (low_level_incharge === true) {
            // restricting search for In charges to sections they are allowed to access
            if (res.data.section === section) {
              dispatch({
                type: BATTALION_TWO_QUERY_FETCHED,
                payload: res.data
              });
            } else {
              dispatch(create_api_message(error_message2, 'battallion_query_fail'));
              dispatch({ type: BATTALION_TWO_QUERY_FAILED });
            }
          } else {
            dispatch({
              type: BATTALION_TWO_QUERY_FETCHED,
              payload: res.data
            });
          }
        }
      })
      .catch((err) => {
        // console.log(err.response.data)
        dispatch(create_api_message(error_message, 'battallion_query_fail'));
        dispatch({ type: BATTALION_TWO_QUERY_FAILED });
      });
  };

//  BATTALLION ONE SECTION QUERY
export const battallion_section_query = (section) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_SECTION_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ section });
  // console.log(body)

  const error_message =
    "Section doesn't exit in the database, please try again with a valid file number.";
  axios
    .post(`${global_url}/battalionone_section_query/`, body, tokenConfig(getState))
    .then((res) => {
      if (res.data) {
        // console.log(res.data);
        dispatch({
          type: BATTALION_SECTION_QUERY_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, 'battallion_query_fail'));
      dispatch({ type: BATTALION_TWO_QUERY_FAILED });
    });
};

//  BATTALLION THREE DEPARTEMENT QUERY
export const battallion_three_deprtmnt_query = (department) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION3_DEPARTEMENT_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ department });
  // console.log(body)

  const error_message =
    "Department doesn't exit in the database, please try again with a valid file number.";
  axios
    .post(`${global_url}/battalion3_section_query/`, body, tokenConfig(getState))
    .then((res) => {
      if (res.data) {
        // console.log(res.data);
        dispatch({
          type: BATTALION3_DEPARTEMENT_QUERY_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, 'battallion_query_fail'));
      dispatch({ type: BATTALION3_DEPARTEMENT_QUERY_FAILED });
    });
};

// battalion_general_department_query_loading
// battalion_general_department_query

//  BATTALLION GENERAL DEPARTEMENT QUERY
export const battallion_general_deprtmnt_query = (department, url) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_GENERAL_DEPARTEMENT_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ department });
  // console.log(body)

  const error_message =
    "Department doesn't exit in the database, please try again with a valid file number.";
  axios
    .post(`${global_url}/${url}/`, body, tokenConfig(getState))
    .then((res) => {
      if (res.data) {
        // console.log(res.data);
        dispatch({
          type: BATTALION_GENERAL_DEPARTEMENT_QUERY_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, 'battallion_query_fail'));
      dispatch({ type: BATTALION_GENERAL_DEPARTEMENT_QUERY_FAILED });
    });
};


//  BATTALLION TWO DATA SUMMARY
export const battallion_two_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battaliontwo_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_TWO_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

//  BATTALLION TWO DATA SUMMARY
export const battallion_one_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battalionone_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_ONE_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

//  BATTALLION THREE DATA SUMMARY
export const battallion_three_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battalionthree_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_THREE_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

//  BATTALLION FOUR DATA SUMMARY
export const battallion_four_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battalionfour_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_FOUR_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

//  BATTALLION FIVE DATA SUMMARY
export const battallion_five_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battalionfive_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_FIVE_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

//  BATTALLION SIX DATA SUMMARY
export const battallion_six_overrall_data = () => (dispatch, getState) => {
  axios
    .get(`${global_url}/battalionsix_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_SIX_OVERRALL_FETCHED,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};