import { 
  LOADING_GET_USER_TYPE,
  GOT_USER_TYPE,
  GOT_USER_TYPE_FAILED,
  LOGIN_SUCCESS, 
  LOGIN_LOADING,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL

} from '../actions/types';


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading_check_user_type: false,
	user_type: null,
	login_loading: false,
	user: null,
	change_password_loading: false,


	isLoading: false,
}

export default function auth(state=initialState, action) {
	switch(action.type){
		case LOADING_GET_USER_TYPE:
			return {
					...state,
					loading_check_user_type: true
				}
		case CHANGE_PASSWORD_LOADING:
			return {
					...state,
					change_password_loading: true
				}
		case CHANGE_PASSWORD_SUCCESS:
		case CHANGE_PASSWORD_FAIL:
			return {
					...state,
					change_password_loading: false
				}
		case LOGIN_LOADING:
			return {
					...state,
					login_loading: true
				}
		case GOT_USER_TYPE:
			return {
					...state,
					loading_check_user_type: false,
					user_type:action.payload 
				}
		case GOT_USER_TYPE_FAILED:
			return {
					...state,
					loading_check_user_type: false
				}
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			}
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
	  case AUTH_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				login_loading: false
			}	
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			}
		default:
			return state;
	}
}
