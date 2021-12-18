import {
  BATTALION_TWO_DETAIL_FETCHED,
  BATTALION_TWO_DETAIL_LOADING,
  BATTALION_ONE_DETAIL_LOADING,
  BATTALION_ONE_DETAIL_FETCHED
} from '../actions/types';

const initialState = {
  battalion_two_detail_data: null,
  battalion_one_detail_data: null,
  battalion_two_data_detail_loading: false,
  battalion_one_data_detail_loading: false
};

export default function battallions_detail(state = initialState, action) {
  switch (action.type) {
    case BATTALION_TWO_DETAIL_LOADING:
      return {
        ...state,
        battalion_two_data_detail_loading: true
      };
    case BATTALION_TWO_DETAIL_FETCHED:
      return {
        ...state,
        battalion_two_detail_data: action.payload,
        battalion_two_data_detail_loading: false
      };
    case BATTALION_ONE_DETAIL_LOADING:
      return {
        ...state,
        battalion_one_data_detail_loading: true
      };
    case BATTALION_ONE_DETAIL_FETCHED:
      return {
        ...state,
        battalion_one_detail_data: action.payload,
        battalion_one_data_detail_loading: false
      };
    default:
      return state;
  }
}
