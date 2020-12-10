import { combineReducers } from 'redux';
import counterReducer from "./counter.reducer";

let reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;