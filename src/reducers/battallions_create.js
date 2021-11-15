import { 
	BATTALLION_TWO_CREATE_LOADING,
	BATTALLION_TWO_CREATED,
	GENERATE_REPORT_BATTALLION_TWO_LOADING,
	GENERATE_REPORT_BATTALLION_TWO_DONE
} from '../actions/types';


const initialState = {
	battallions_two : null,
	create_battallion_two_loading: false,
	generate_report_battallion_loading: false
}

export default function battallions_create(state=initialState, action) {
	switch(action.type){
		// case BATTALLION_TWO_CREATED:
		// 	return {
		// 			...state,
		// 			battallions_two: action.payload 
		// 		}
		case GENERATE_REPORT_BATTALLION_TWO_LOADING:
			return {
					...state,
					generate_report_battallion_loading: true
				}
		case GENERATE_REPORT_BATTALLION_TWO_DONE:
			return {
					...state,
					generate_report_battallion_loading: false
				}
		case BATTALLION_TWO_CREATE_LOADING:
			return {
					...state,
					create_battallion_two_loading: true
				}
		case BATTALLION_TWO_CREATED:
			return {
					...state,
					create_battallion_two_loading: false
				}
		default:
			return state;
	}
}
