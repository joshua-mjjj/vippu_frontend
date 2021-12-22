import {
  BATTALLION_TWO_CREATE_LOADING,
  BATTALLION_TWO_CREATED,
  GENERATE_REPORT_BATTALLION_TWO_LOADING,
  GENERATE_REPORT_BATTALLION_TWO_DONE,
  DELETE_RECORD_LOADING,
  DELETE_RECORD_LOADED,
  DELETE_RECORD_FALIED,

  DELETE_LOADING,
  DELETE_LOADED,
  DELETE_FALIED
} from '../actions/types';

const initialState = {
  battallions_two: null,
  create_battallion_two_loading: false,
  generate_report_battallion_loading: false,
  delete_record: false,
  can_delete: false,
  delete_loading: false
};

export default function battallions_create(state = initialState, action) {
  switch (action.type) {
    case DELETE_LOADING:
      return {
        ...state,
        delete_loading: true
      };
    case DELETE_FALIED:
      return {
        ...state,
        delete_loading: false
      };
    case DELETE_LOADED:
      return {
        ...state,
        delete_loading: false,
        can_delete: false
      };
    case DELETE_RECORD_LOADING:
      return {
        ...state,
        delete_record: true
      };
    case DELETE_RECORD_LOADED:
      return {
        ...state,
        delete_record: false,
        can_delete: true
      };
    case DELETE_RECORD_FALIED:
      return {
        ...state,
        delete_record: false,
        can_delete: false
      };
    // case BATTALLION_TWO_CREATED:
    // 	return {
    // 			...state,
    // 			battallions_two: action.payload
    // 		}
    case GENERATE_REPORT_BATTALLION_TWO_LOADING:
      return {
        ...state,
        generate_report_battallion_loading: true
      };
    case GENERATE_REPORT_BATTALLION_TWO_DONE:
      return {
        ...state,
        generate_report_battallion_loading: false
      };
    case BATTALLION_TWO_CREATE_LOADING:
      return {
        ...state,
        create_battallion_two_loading: true
      };
    case BATTALLION_TWO_CREATED:
      return {
        ...state,
        create_battallion_two_loading: false
      };
    default:
      return state;
  }
}
