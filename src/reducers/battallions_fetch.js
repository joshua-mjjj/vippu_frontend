import { 
	BATTALION_TWO_DATA_FETCHED,
    BATTALION_TWO_DATA_LOADING
} from '../actions/types';


const initialState = {
	battalion_two_data : null,
	battalion_two_data_loading: false
}

export default function battallions_fetch(state=initialState, action) {
	switch(action.type){
		case BATTALION_TWO_DATA_LOADING:
			return {
					...state,
					battalion_two_data_loading: true
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
