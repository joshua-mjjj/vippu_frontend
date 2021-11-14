import { CREATE_MESSAGES, API_MESSSAGE } from './types';

// CREATE MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGES,
    payload: msg,
  };
};


// CREATE MESSAGE
export const create_api_message = (msg, type) => {
  return {
    type: API_MESSSAGE,
    payload: msg,
    status_type: type
  };
};

