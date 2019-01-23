import { combineReducers } from "redux";

import companies from "./companies";
import charts from "./charts";

export default combineReducers({
	companies,
	charts
});
