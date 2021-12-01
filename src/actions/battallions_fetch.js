import axios from "axios";
import { returnError } from "./errors";
import { create_api_message } from "./messages";

import {
  BATTALION_TWO_DATA_FETCHED,
  BATTALION_TWO_DATA_LOADING,
  BATTALION_TWO_OVERRALL_FETCHED,
  BATTALION_TWO_QUERY_LOADING,
  BATTALION_SECTION_QUERY_LOADING,
  BATTALION_SECTION_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FAILED,
  BATTALION_ONE_DATA_LOADING,
  BATTALION_ONE_DATA_FETCHED,
} from "./types";

import { tokenConfig, global_url } from "./auth";


//  BATTALLION TWO CREATE 
export const battallion_two_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_DATA_LOADING });

   // const message = `${first_name}'s details have been saved in the database.`
    axios
    .get(`${global_url}/api/battallion_two/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if(res.data.results){
      	dispatch({
	        type: BATTALION_TWO_DATA_FETCHED,
	        payload: res.data.results,
	      });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_TWO_DATA_FETCHED,
        payload: null,
      });
    });
};

//  BATTALLION TWO CREATE 
export const battallion_one_fetch_data = () => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_ONE_DATA_LOADING });

   // const message = `${first_name}'s details have been saved in the database.`
    axios
    .get(`${global_url}/api/battallion_one/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if(res.data.results){
        dispatch({
          type: BATTALION_ONE_DATA_FETCHED,
          payload: res.data.results,
        });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_ONE_DATA_FETCHED,
        payload: null,
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

   const error_message = "Employee with this file number doesn't exit in the database, please try again with a valid file number."
    axios
    .post(`${global_url}/api/battalionquery_two/`, body, tokenConfig(getState))
    .then((res) => {
      if(res.data){
        // console.log(res.data)
        dispatch({
          type: BATTALION_TWO_QUERY_FETCHED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, "battallion_query_fail"));
      dispatch({ type: BATTALION_TWO_QUERY_FAILED });
    });
};

//  BATTALLION ONE CREATE 
export const battallion_one_query = (file_number) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_QUERY_LOADING });

  // Request Body
  const body = JSON.stringify({ file_number });
  // console.log(body)

   const error_message = "Employee with this file number doesn't exit in the database, please try again with a valid file number."
    axios
    .post(`${global_url}/api/battalionquery_one/`, body, tokenConfig(getState))
    .then((res) => {
      if(res.data){
        // console.log(res.data)
        dispatch({
          type: BATTALION_TWO_QUERY_FETCHED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, "battallion_query_fail"));
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

   const error_message = "Section doesn't exit in the database, please try again with a valid file number."
    axios
    .post(`${global_url}/api/battalionone_section_query/`, body, tokenConfig(getState))
    .then((res) => {
      if(res.data){
        console.log(res.data)
        dispatch({
          type: BATTALION_SECTION_QUERY_FETCHED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      // console.log(err.response.data)
      dispatch(create_api_message(error_message, "battallion_query_fail"));
      dispatch({ type: BATTALION_TWO_QUERY_FAILED });
    });
};

//  BATTALLION TWO DATA SUMMARY 
export const battallion_two_overrall_data = () => (dispatch, getState) => {

    axios
    .get(`${global_url}/api/battaliontwo_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if(res.data){
        dispatch({
          type: BATTALION_TWO_OVERRALL_FETCHED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err.response)
    });
};

//  BATTALLION TWO DATA SUMMARY 
export const battallion_one_overrall_data = () => (dispatch, getState) => {

    axios
    .get(`${global_url}/api/battalionone_overrall/`, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      if(res.data){
        dispatch({
          type: BATTALION_TWO_OVERRALL_FETCHED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err.response)
    });
};
