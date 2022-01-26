import {
  BATTALION_TWO_DATA_FETCHED,
  BATTALION_TWO_DATA_LOADING,
  BATTALION_TWO_OVERRALL_FETCHED,
  BATTALION_ONE_OVERRALL_FETCHED,
  BATTALION_THREE_OVERRALL_FETCHED,
  BATTALION_TWO_QUERY_LOADING,
  BATTALION_TWO_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FAILED,
  BATTALION_ONE_DATA_LOADING,
  BATTALION_ONE_DATA_FETCHED,
  BATTALION_THREE_DATA_LOADING,
  BATTALION_THREE_DATA_FETCHED,
  BATTALION_SECTION_QUERY_LOADING,
  BATTALION_SECTION_QUERY_FETCHED,

  BATTALION3_DEPARTEMENT_QUERY_LOADING,
  BATTALION3_DEPARTEMENT_QUERY_FETCHED,
  BATTALION3_DEPARTEMENT_QUERY_FAILED
} from '../actions/types';

const initialState = {
  battalion_two_data: null,
  battalion_two_data_loading: false,
  battalion_two_overrall_data: null,
  battalion_one_overrall_data: null,
  battalion_two_query_loading: false,
  battalion_two_query_data: null,

  // battalion one
  battalion_one_data: null,
  battalion_three_data: null,
  battalion_sectionquery: null,
  battalion_sectionquery_loading: false,
  battalion_one_data_loading: false,

  // battalion three
  battalion_three_overrall_data: null,
  battalion3_department_query: null,
  battalion3_department_query_loading: false,
  battalion_three_data_loading: false,

};

export default function battallions_fetch(state = initialState, action) {
  switch (action.type) {
    case BATTALION_TWO_DATA_LOADING:
      return {
        ...state,
        battalion_two_data_loading: true
      };
    case BATTALION_SECTION_QUERY_LOADING:
      return {
        ...state,
        battalion_sectionquery_loading: true
      };
    case BATTALION3_DEPARTEMENT_QUERY_LOADING:
      return {
        ...state,
        battalion3_department_query_loading: true
      };
    case BATTALION_SECTION_QUERY_FETCHED:
      return {
        ...state,
        battalion_sectionquery: action.payload,
        battalion_sectionquery_loading: false
      };
    case BATTALION3_DEPARTEMENT_QUERY_FETCHED:
      return {
        ...state,
        battalion3_department_query: action.payload,
        battalion3_department_query_loading: false
      };
    case BATTALION_ONE_DATA_LOADING:
      return {
        ...state,
        battalion_one_data_loading: true
      };
    case BATTALION_THREE_DATA_LOADING:
      return {
        ...state,
        battalion_three_data_loading: true
      };
    case BATTALION_TWO_DATA_FETCHED:
      return {
        ...state,
        battalion_two_data: action.payload,
        battalion_two_data_loading: false
      };
    case BATTALION_ONE_DATA_FETCHED:
      return {
        ...state,
        battalion_one_data: action.payload,
        battalion_one_data_loading: false
      };
    case BATTALION_THREE_DATA_FETCHED:
      return {
        ...state,
        battalion_three_data: action.payload,
        battalion_three_data_loading: false
      };
    case BATTALION_TWO_QUERY_LOADING:
      return {
        ...state,
        battalion_two_query_loading: true
      };
    case BATTALION_TWO_QUERY_FETCHED:
      return {
        ...state,
        battalion_two_query_data: action.payload,
        battalion_two_query_loading: false
      };
    case BATTALION_TWO_QUERY_FAILED:
      return {
        ...state,
        battalion_two_query_loading: false
      };
    case BATTALION3_DEPARTEMENT_QUERY_FAILED:
      return {
        ...state,
        battalion3_department_query_loading: false
      };
    case BATTALION_TWO_OVERRALL_FETCHED:
      return {
        ...state,
        battalion_two_overrall_data: action.payload
      };
    case BATTALION_ONE_OVERRALL_FETCHED:
      return {
        ...state,
        battalion_one_overrall_data: action.payload
      };
   case BATTALION_THREE_OVERRALL_FETCHED:
    return {
      ...state,
      battalion_three_overrall_data: action.payload
    };
    default:
      return state;
  }
}
