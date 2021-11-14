import { 
	BATTALLION_TWO_CREATE_LOADING,
	BATTALLION_TWO_CREATED,
} from '../actions/types';


const initialState = {
	battallions_two : null,
	create_battallion_two_loading: false
}

export default function battallions_create(state=initialState, action) {
	switch(action.type){
		// case BATTALLION_TWO_CREATED:
		// 	return {
		// 			...state,
		// 			battallions_two: action.payload 
		// 		}
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
