import { GET_ERRORS } from './types';

// RETURN ERRORS
// takes in status code for now, may be more parameters in future
export const returnError = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
