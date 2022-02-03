import axios from 'axios';
import { returnError } from './errors';
// import { create_api_message } from "./messages";

import {
  BATTALION_TWO_DETAIL_LOADING,
  BATTALION_TWO_DETAIL_FETCHED,
  BATTALION_ONE_DETAIL_LOADING,
  BATTALION_ONE_DETAIL_FETCHED,
  BATTALION_THREE_DETAIL_LOADING,
  BATTALION_THREE_DETAIL_FETCHED,
  BATTALION_GENERAL_DETAIL_LOADING,
  BATTALION_GENERAL_DETAIL_FETCHED
} from './types';

import { tokenConfig, global_url } from './auth';

//  BATTALLION TWO CREATE
export const battallion_two_fetch_detail = (id) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_DETAIL_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_two/${id}`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_TWO_DETAIL_FETCHED,
          payload: res.data
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_TWO_DETAIL_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION TWO CREATE
export const battallion_one_fetch_detail = (id) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_ONE_DETAIL_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_one/${id}`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_ONE_DETAIL_FETCHED,
          payload: res.data
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_ONE_DETAIL_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION THREE CREATE
export const battallion_three_fetch_detail = (id) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_THREE_DETAIL_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/battallion_three/${id}`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_THREE_DETAIL_FETCHED,
          payload: res.data
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_THREE_DETAIL_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION THREE CREATE
export const battallion_genal_fetch_detail = (id, url) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_THREE_DETAIL_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/${url}/${id}`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_THREE_DETAIL_FETCHED,
          payload: res.data
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_THREE_DETAIL_FETCHED,
        payload: null
      });
    });
};

//  BATTALLION GENERAL CREATE
export const battallion_general_fetch_detail = (id, battalion_url) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_GENERAL_DETAIL_LOADING });

  // const message = `${first_name}'s details have been saved in the database.`
  axios
    .get(`${global_url}/${battalion_url}/${id}`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if (res.data) {
        dispatch({
          type: BATTALION_GENERAL_DETAIL_FETCHED,
          payload: res.data
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_GENERAL_DETAIL_FETCHED,
        payload: null
      });
    });
};
