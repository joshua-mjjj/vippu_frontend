import { CREATE_MESSAGES, API_MESSSAGE, CLEAR_MESSAGES } from '../actions/types';

const initialState = {
  notify_timeout: null,
  api_message: null,
  message_type: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGES:
      return {
        ...state,
        notify_timeout: action.payload
      };
    case API_MESSSAGE:
      return {
        ...state,
        api_message: action.payload,
        message_type: action.status_type
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        api_message: null,
        message_type: null
      };
    default:
      return state;
  }
}
