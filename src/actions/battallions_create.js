import axios from "axios";
import fileDownload from "js-file-download";
import { returnError } from "./errors";
import { create_api_message } from "./messages";

import {
  BATTALLION_TWO_CREATE_LOADING,
  BATTALLION_TWO_CREATED,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
  GENERATE_REPORT_BATTALLION_TWO_LOADING,
  GENERATE_REPORT_BATTALLION_TWO_DONE
} from "./types";

import { tokenConfig, global_url } from "./auth";

export const unique_site_id = '@regulars_encode_data$IAMTHEREFOREIAM'

//  BATTALLION TWO CREATE 
export const battallion_two_create = (
	    first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date
    ) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

  // Request Body
  const body = JSON.stringify({ 
  	    first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date 
    });
    // console.log(body)
    const message = `${first_name}'s details have been saved in the database.`
    axios
    .post(`${global_url}/api/battallion_two/`, body, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: BATTALLION_TWO_CREATED,
        payload: res.data,
      });
      dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALLION_TWO_CREATED,
      });
    });
};

//  BATTALLION ONE CREATE 
export const battallion_one_create = (
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date
    ) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

  // Request Body
  const body = JSON.stringify({ 
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date 
    });
    // console.log(body)
    const message = `${first_name}'s details have been saved in the database.`
    axios
    .post(`${global_url}/api/battallion_one/`, body, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: BATTALLION_TWO_CREATED,
        payload: res.data,
      });
      dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALLION_TWO_CREATED,
      });
    });
};

//  BATTALLION TWO UPDATE 
export const battallion_two_update = (
        id,
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date
    ) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

  // Request Body
  const body = JSON.stringify({ 
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date 
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`
    axios
    .put(`${global_url}/api/battallion_two/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: BATTALLION_TWO_CREATED,
        payload: res.data,
      });
      dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALLION_TWO_CREATED,
      });
    });
};

//  BATTALLION TWO UPDATE 
export const battallion_one_update = (
        id,
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date
    ) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

  // Request Body
  const body = JSON.stringify({ 
        first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        other_education_level,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment,
        date_of_transfer,
        date_of_promotion,
        date_of_birth,
        armed,
        section,
        location,
        on_leave,
        leave_start_date,
        leave_end_date 
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`
    axios
    .put(`${global_url}/api/battallion_one/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: BATTALLION_TWO_CREATED,
        payload: res.data,
      });
      dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALLION_TWO_CREATED,
      });
    });
};

// SECTION DATA 
export const download_file_section = (api, filename, section) =>  (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
     axios
    .get(`${global_url}/api/${api}/?section=${section}&unique=${unique_site_id}`, { responseType: 'blob', })
    .then((res) => {
      const message = "Your report will soon be downloaded, please find it in your downloads folder."
      dispatch(create_api_message(message, "file_downloaded"));
      fileDownload(res.data, `${filename}.xls`);
      // fileDownload(res.data, "filename.xls");
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
    });

}

// GETTING FILES
export const download_file = (api, filename) =>  (dispatch, getState) => {
     
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
     axios
    .get(`${global_url}/api/${api}/?unique=${unique_site_id}`, { responseType: 'blob', })
    .then((res) => {
      const message = "Your report will soon be downloaded, please find it in your downloads folder."
      dispatch(create_api_message(message, "file_downloaded"));
      fileDownload(res.data, `${filename}.xls`);
      // fileDownload(res.data, "filename.xls");
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
    });

}

// CLEAR MESSAGES
export const clear_messages = () =>  (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES,
    });
}

// CLEAR ERRORS
export const clear_errors = () =>  (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
}