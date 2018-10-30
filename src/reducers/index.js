import { combineReducers } from "redux";
import qa_reducers from './qa-reducers';
import ans_reducers from "./ans-reducers";

const allReducers = combineReducers({
    qaList : qa_reducers,
    ansList: ans_reducers
});

export default allReducers;