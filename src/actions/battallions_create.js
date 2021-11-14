import axios from "axios";
import fileDownload from "js-file-download";
import { returnError } from "./errors";
import { create_api_message } from "./messages";

import {
  BATTALLION_TWO_CREATE_LOADING,
  BATTALLION_TWO_CREATED,
  CLEAR_MESSAGES,
  CLEAR_ERRORS
} from "./types";

import { tokenConfig } from "./auth";

const global_url = 'http://127.0.0.1:8000'

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

// GETTING FILES
export const download_file = () =>  (dispatch) => {
     
     axios
    .get(`${global_url}/api/export_excel/`, { responseType: 'blob', })
    .then((res) => {
      fileDownload(res.data, 'filename.xls');
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
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