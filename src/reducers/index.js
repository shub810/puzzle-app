import { combineReducers } from "redux";
import qa_reducers from './qa-reducers';

const allReducers = combineReducers({
    qaList : qa_reducers
});

export default allReducers;