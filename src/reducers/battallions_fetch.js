import { 
	BATTALION_TWO_DATA_FETCHED,
    BATTALION_TWO_DATA_LOADING,
    BATTALION_TWO_OVERRALL_FETCHED,
    BATTALION_TWO_QUERY_LOADING,
    BATTALION_TWO_QUERY_FETCHED,
	BATTALION_TWO_QUERY_FAILED
} from '../actions/types';


const initialState = {
	battalion_two_data : null,
	battalion_two_overrall_data : null,
	battalion_two_data_loading: false,
	battalion_two_query_loading: false,
	battalion_two_query_data: null,
}

export default function battallions_fetch(state=initialState, action) {
	switch(action.type){
		case BATTALION_TWO_DATA_LOADING:
			return {
					...state,
					battalion_two_data_loading: true
				}
		case BATTALION_TWO_QUERY_LOADING:
			return {
					...state,
					battalion_two_query_loading: true
				}
		case BATTALION_TWO_QUERY_FETCHED:
			return {
					...state,
					battalion_two_query_data: action.payload,
					battalion_two_query_loading: false
				}
		case BATTALION_TWO_QUERY_FAILED:
			return {
					...state,
					battalion_two_query_loading: false
				}
		case BATTALION_TWO_OVERRALL_FETCHED:
			return {
					...state,
					battalion_two_overrall_data: action.payload
				}
		case BATTALION_TWO_DATA_FETCHED:
			return {
					...state,
					battalion_two_data: action.payload,
					battalion_two_data_loading: false
				}
		default:
			return state;
	}
}
