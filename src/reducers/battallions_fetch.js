import {
  BATTALION_TWO_DATA_FETCHED,
  BATTALION_TWO_DATA_LOADING,
  BATTALION_TWO_OVERRALL_FETCHED,
  BATTALION_ONE_OVERRALL_FETCHED,
  BATTALION_THREE_OVERRALL_FETCHED,
  BATTALION_FOUR_OVERRALL_FETCHED,
  BATTALION_FIVE_OVERRALL_FETCHED,
  BATTALION_TWO_QUERY_LOADING,
  BATTALION_TWO_QUERY_FETCHED,
  BATTALION_TWO_QUERY_FAILED,
  BATTALION_ONE_DATA_LOADING,
  BATTALION_ONE_DATA_FETCHED,
  BATTALION_THREE_DATA_LOADING,
  BATTALION_THREE_DATA_FETCHED,

  BATTALION_SECTION_QUERY_LOADING,
  BATTALION_SECTION_QUERY_FETCHED,

  BATTALION_FOUR_DATA_LOADING,
  BATTALION_FOUR_DATA_FETCHED,

  BATTALION_FIVE_DATA_LOADING,
  BATTALION_FIVE_DATA_FETCHED,

  BATTALION3_DEPARTEMENT_QUERY_LOADING,
  BATTALION3_DEPARTEMENT_QUERY_FETCHED,
  BATTALION3_DEPARTEMENT_QUERY_FAILED,

  BATTALION_GENERAL_DEPARTEMENT_QUERY_LOADING,
  BATTALION_GENERAL_DEPARTEMENT_QUERY_FETCHED,
  BATTALION_GENERAL_DEPARTEMENT_QUERY_FAILED
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

  // battalion four 
  battalion_four_data_loading: false,
  battalion_four_data: false,
  battalion_four_overrall_data: null,

  // battalion four
  battalion_five_data_loading: false,
  battalion_five_data: null,
  battalion_five_overrall_data: null,

  // general 
  battalion_general_department_query_loading: false,
  battalion_general_department_query: null

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
    case BATTALION_GENERAL_DEPARTEMENT_QUERY_LOADING:
      return {
        ...state,
        battalion_general_department_query_loading: true
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
    case BATTALION_GENERAL_DEPARTEMENT_QUERY_FETCHED:
      return {
        ...state,
        battalion_general_department_query: action.payload,
        battalion_general_department_query_loading: false
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
    case BATTALION_FOUR_DATA_LOADING:
      return {
        ...state,
        battalion_four_data_loading: true
      };
    case BATTALION_FIVE_DATA_LOADING:
      return {
        ...state,
        battalion_five_data_loading: true
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
    case BATTALION_FOUR_DATA_FETCHED:
      return {
        ...state,
        battalion_four_data: action.payload,
        battalion_four_data_loading: false
      };
    case BATTALION_FIVE_DATA_FETCHED:
      return {
        ...state,
        battalion_five_data: action.payload,
        battalion_five_data_loading: false
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
    case BATTALION_GENERAL_DEPARTEMENT_QUERY_FAILED:
      return {
        ...state,
        battalion_general_department_query_loading: false
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
  case BATTALION_FOUR_OVERRALL_FETCHED:
    return {
      ...state,
      battalion_four_overrall_data: action.payload
    };
  case BATTALION_FIVE_OVERRALL_FETCHED:
    return {
      ...state,
      battalion_five_overrall_data: action.payload
    };
    default:
      return state;
  }
}
