import { combineReducers } from "redux";

import errors from "./errors";
import auth from "./auth";
import messages from "./messages";
import battallions_create from "./battallions_create";
import battallions_fetch from "./battallions_fetch";
import battallions_detail from "./battallions_detail";

export default combineReducers({
  errors,
  messages,
  battallions_create,
  battallions_fetch,
  battallions_detail,
  auth,
});
