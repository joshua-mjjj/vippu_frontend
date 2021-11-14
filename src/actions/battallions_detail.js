import axios from "axios";
import { returnError } from "./errors";
// import { create_api_message } from "./messages";

import {
  BATTALION_TWO_DETAIL_LOADING,
  BATTALION_TWO_DETAIL_FETCHED
} from "./types";

import { tokenConfig, global_url } from "./auth";


//  BATTALLION TWO CREATE 
export const battallion_two_fetch_detail = (id) => (dispatch, getState) => {
  //Loading
  dispatch({ type: BATTALION_TWO_DETAIL_LOADING });

   // const message = `${first_name}'s details have been saved in the database.`
    axios
    .get(`${global_url}/api/battallion_two/${id}`, tokenConfig(getState))
    .then((res) => {
      console.log(res.data)
      if(res.data){
      	dispatch({
	        type: BATTALION_TWO_DETAIL_FETCHED,
	        payload: res.data,
	      });
      }
      // dispatch(create_api_message(message, "battallion_employee_created"));
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: BATTALION_TWO_DETAIL_FETCHED,
        payload: null,
      });
    });
};

