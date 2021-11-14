import { 

LOADING, 
LOGOUT_SUCCESS,
REGISTER_SUCCESS, 
LOGIN_SUCCESS_GOOGLE,
LOGIN_SUCCESS_FACEBOOK,
VERIFY_FAIL,
VERIFY_EMAIL,
USER_INITIATE_RESET,
USER_RESET_PASSWORD,
USER_RESET_PASSWORD_FAIL,
VERIFY_RESET_PASSWORD,
VERIFY_RESET_PASSWORD_FAIL, 
USER_UPDATE_FAIL,
AWS_COGNITO_REGISTER,
AWS_COGNITO_VERIFY_CODE,
AWS_COGNITO_RESEND_CODE,
USER_REGISTER,
AWS_COGNITO_RESET,
RESET_PASSWORD_RAILS,
AWS_COGNITO_REGISTER_SOCIAL,
GO_TO_WIZARD_SOCIAL,





  LOADING_GET_USER_TYPE,
  GOT_USER_TYPE,
  GOT_USER_TYPE_FAILED,
  LOGIN_SUCCESS, 
  LOGIN_LOADING,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR

} from '../actions/types';


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading_check_user_type: false,
	user_type: null,
	login_loading: false,
	user: null,


	isLoading: false,
}

export default function auth(state=initialState, action) {
	switch(action.type){
		case LOADING_GET_USER_TYPE:
			return {
					...state,
					loading_check_user_type: true
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






		case USER_REGISTER:
			return {
					...state,
					user_register: true
				}
		case AWS_COGNITO_REGISTER_SOCIAL:
			return {
					...state,
					user_register_social: true
				}
		case LOADING:
			return {
				...state,
				isLoading: true
			}
		case USER_UPDATE_FAIL:
			localStorage.removeItem('name_social')
	  		localStorage.removeItem('email_social')
			return {
					...state,
					isLoading: false
				}
		case VERIFY_FAIL:
		case VERIFY_RESET_PASSWORD_FAIL:
		// localStorage.removeItem('verify_code_email')
			return {
				...state,
				isLoading: false
			}
		case VERIFY_EMAIL:
		case AWS_COGNITO_RESET:
			return {
				...state,
				...action.payload,
				isLoading: false
			}
		case USER_INITIATE_RESET:
			return {
				...state,
				forgot_password : true
			}
		case RESET_PASSWORD_RAILS:
			return {
				...state,
				change_password : true
			}
		case USER_RESET_PASSWORD_FAIL:
		localStorage.removeItem('reset_code');
		localStorage.removeItem('email_reset_pass');
			return {
				...state,
				isLoading: false
			}
		case USER_RESET_PASSWORD:
		localStorage.setItem('token', action.payload.auth_token)
		localStorage.removeItem('reset_code');
		localStorage.removeItem('email_reset_pass');
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload.user,
				forgot_password : false,
				change_password : false
			}
		case AWS_COGNITO_RESEND_CODE:
			return {
					...state,
					...action.payload,
					isAuthenticated: false,
					isLoading: false,
					forgot_password: false
				}
		case AWS_COGNITO_REGISTER:
			return {
				...state,
				...action.payload,
				isAuthenticated: false,
				isLoading: false,
				forgot_password: false
			}
		case AWS_COGNITO_VERIFY_CODE: // make the register requset to the backend
			return {
				...state,
				...action.payload,
				// user: action.payload,
				isAuthenticated: false,
				isLoading: true,
				forgot_password: false
			}
		case REGISTER_SUCCESS:
		// localStorage.setItem('token', action.payload.auth_token)
		// localStorage.removeItem('name_social')
  // 		localStorage.removeItem('email_social')
			return {
				...state,
				...action.payload,
				isAuthenticated: false,
				isLoading: false,
				user: action.payload,
				user_register: false,
				user_register_social: false
			}
		case LOGIN_SUCCESS_GOOGLE:
		case LOGIN_SUCCESS_FACEBOOK:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				// isAuthenticated: true,
				isLoading: false,
				user: action.payload.user,
				user_register: false,
				user_register_social: true
			}
		case GO_TO_WIZARD_SOCIAL:
			return {
				...state,
				user_register_social: false
			}
		case VERIFY_RESET_PASSWORD:
			return {
				...state,
				...action.payload,
				isAuthenticated: false,
				isLoading: false
			}
		default:
			return state;
	}
}
