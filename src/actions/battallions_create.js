import axios from 'axios';
import fileDownload from 'js-file-download';
import { returnError } from './errors';
import { create_api_message } from './messages';

import {
  BATTALLION_TWO_CREATE_LOADING,
  BATTALLION_TWO_CREATED,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
  GENERATE_REPORT_BATTALLION_TWO_LOADING,
  GENERATE_REPORT_BATTALLION_TWO_DONE,
  DELETE_RECORD_LOADING,
  DELETE_RECORD_LOADED,
  DELETE_RECORD_FALIED,
  DELETE_LOADING,
  DELETE_LOADED,
  DELETE_FALIED,
  BATTALLION_THREE_CREATE_LOADING,
  BATTALLION_THREE_CREATED,
  BATTALLION_GENERAL_CREATE_LOADING,
  BATTALLION_GENERAL_CREATED

} from './types';

import { tokenConfig, global_url } from './auth';

export const unique_site_id = '@regulars_encode_data$IAMTHEREFOREIAM';

//  BATTALLION TWO CREATE
export const battallion_two_create =
  (
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have been saved in the database.`;
    axios
      .post(`${global_url}/battallion_two/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_TWO_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_TWO_CREATED
        });
      });
  };

// BATALLION CREATE GENERAL
export const battallion_general_create =
  ( 
    batallion_url,
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have been saved in the database.`;
    axios
      .post(`${global_url}/${batallion_url}/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_TWO_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_TWO_CREATED
        });
      });
  };

//  BATTALLION THREE UPDATE
export const battallion_three_update =
  (
    id,
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    notify_leave,
    notify_special_duty,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_THREE_CREATE_LOADING });
    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      notify_leave,
      notify_special_duty,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`;
    axios
      .put(`${global_url}/battallion_three/${id}/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_THREE_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_THREE_CREATED
        });
      });
  };


//  BATTALLION GENERAL UPDATE
export const battallion_general_update =
  ( 
    battallion_url,
    id,
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    notify_leave,
    notify_special_duty,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_GENERAL_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      notify_leave,
      notify_special_duty,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`;
    axios
      .put(`${global_url}/${battallion_url}/${id}/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_GENERAL_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_GENERAL_CREATED
        });
      });
  };



//  BATTALLION ONE CREATE
export const battallion_one_create =
  (
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have been saved in the database.`;
    axios
      .post(`${global_url}/battallion_one/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_TWO_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_TWO_CREATED
        });
      });
  };

//  BATTALLION TWO UPDATE
export const battallion_two_update =
  (
    id,
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    notify_leave,
    notify_special_duty,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      notify_leave,
      notify_special_duty,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`;
    axios
      .put(`${global_url}/battallion_two/${id}/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_TWO_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_TWO_CREATED
        });
      });
  };

export const send_notification = (id, object, url) => (dispatch, getState) => {
  // const body = JSON.stringify({ notify_leave });
  axios
    .patch(`${global_url}/${url}/${id}/`, object, tokenConfig(getState))
    .then((res) => {
      console.log('Notified');
    })
    .catch((err) => {
      console.log('Sorry, an error occured while sending the notification');
    });
};

export const delete_employee = (id, url) => (dispatch, getState) => {
  dispatch({ type: DELETE_LOADING });
 
  const error_message = "An error occured while trying to delete this employee, please try again later."
  const message = "Employee has successfully been deleted."
   axios
   .delete(`${global_url}/${url}/${id}/`, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        const deleted = "true"
        localStorage.setItem("deleted", deleted);
        dispatch(create_api_message(message, 'record_deleted'));
        dispatch({
          type: DELETE_LOADED
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        // dispatch(returnError(err.response.data, err.response.status));
        dispatch(create_api_message(error_message, 'delete_failed'));
        dispatch({
          type: DELETE_FALIED
        });
      });
};

export const save_delete_record = (reason, deletor_name, deletor_file_number, deleted_name, deleted_file_number, battalion) => (dispatch, getState) => {
  
  dispatch({ type: DELETE_RECORD_LOADING });

  const body = JSON.stringify({ 
    reason, 
    deletor_name, 
    deletor_file_number, 
    deleted_name, 
    deleted_file_number,
    battalion 
  });
  // console.log(body)
  const error_message = "An error occured while trying to delete this employee, please try again later."
  const message = "Your reason has successfully been submitted. You can delete now."
   axios
   .post(`${global_url}/deleted_employees/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch(create_api_message(message, 'record_delete_saved'));
        dispatch({
          type: DELETE_RECORD_LOADED
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        // dispatch(returnError(err.response.data, err.response.status));
        dispatch(create_api_message(error_message, 'record_delete_failed'));
        dispatch({
          type: DELETE_RECORD_FALIED
        });
      });
};

//  BATTALLION TWO UPDATE
export const battallion_one_update =
  (
    id,
    first_name,
    last_name,
    nin,
    ipps,
    file_number,
    tin_number,
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
    leave_end_date,
    notify_leave,
    notify_special_duty,
    special_duty_start_date,
    special_duty_end_date
  ) =>
  (dispatch, getState) => {
    //Loading
    dispatch({ type: BATTALLION_TWO_CREATE_LOADING });

    // Request Body
    const body = JSON.stringify({
      first_name,
      last_name,
      nin,
      ipps,
      file_number,
      tin_number,
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
      leave_end_date,
      notify_leave,
      notify_special_duty,
      special_duty_start_date,
      special_duty_end_date
    });
    // console.log(body)
    const message = `${first_name}'s details have successfully been updated in the database.`;
    axios
      .put(`${global_url}/battallion_one/${id}/`, body, tokenConfig(getState))
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: BATTALLION_TWO_CREATED,
          payload: res.data
        });
        dispatch(create_api_message(message, 'battallion_employee_created'));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: BATTALLION_TWO_CREATED
        });
      });
  };

// DEPARTMENT DATA
export const download_file_department =
  (api, filename, department, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    console.log(department)
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?department=${department}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// SECTION DATA
export const download_file_section =
  (api, filename, section, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?section=${section}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// DEPARTMENT DATA
export const download_file_department_status =
  (api, filename, department, status_type, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?department=${department}&status_type=${status_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// SECTION DATA
export const download_file_section_status_Bone =
  (api, filename, section, status_type, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?section=${section}&status_type=${status_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// DEPARTMENT DATA
export const download_file_department_leave =
  (api, filename, department, leave_type, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?department=${department}&leave_type=${leave_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };
// SECTION DATA
export const download_file_section_leave_Bone =
  (api, filename, section, leave_type, title_doc) => (dispatch, getState) => {
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?section=${section}&leave_type=${leave_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// GETTING FILES
export const download_file = (api, filename, title_doc) => (dispatch, getState) => {
  // generating
  dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
  // const token = getState().auth.token;
  axios
    .get(`${global_url}/${api}/?title_doc=${title_doc}&unique=${unique_site_id}`, {
      responseType: 'blob'
    })
    .then((res) => {
      const message =
        'Your report will soon be downloaded, please find it in your downloads folder.';
      dispatch(create_api_message(message, 'file_downloaded'));
      fileDownload(res.data, `${filename}.xls`);
      // fileDownload(res.data, "filename.xls");
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
    });
};

export const download_file_query_status =
  (api, filename, status_type, title_doc) => (dispatch, getState) => {
    // console.log(status_type)
    // console.log(api)
    // console.log(filename)
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?status_type=${status_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

export const download_file_query_status_Bone =
  (api, filename, status_type, title_doc) => (dispatch, getState) => {
    // console.log(status_type)
    // console.log(api)
    // console.log(filename)
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?status_type=${status_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

export const download_file_query_leave_Bone =
  (api, filename, leave_type, title_doc) => (dispatch, getState) => {
    // console.log(leave_type)
    // console.log(api)
    // console.log(filename)
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?leave_type=${leave_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

export const download_file_query_leave =
  (api, filename, leave_type, title_doc) => (dispatch, getState) => {
    console.log(leave_type);
    console.log(api);
    console.log(filename);
    // generating
    dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_LOADING });
    // const token = getState().auth.token;
    axios
      .get(
        `${global_url}/${api}/?leave_type=${leave_type}&title_doc=${title_doc}&unique=${unique_site_id}`,
        { responseType: 'blob' }
      )
      .then((res) => {
        const message =
          'Your report will soon be downloaded, please find it in your downloads folder.';
        dispatch(create_api_message(message, 'file_downloaded'));
        fileDownload(res.data, `${filename}.xls`);
        // fileDownload(res.data, "filename.xls");
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GENERATE_REPORT_BATTALLION_TWO_DONE });
      });
  };

// CLEAR MESSAGES
export const clear_messages = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGES
  });
};

// CLEAR ERRORS
export const clear_errors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
