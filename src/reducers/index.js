import { combineReducers } from 'redux';
import note from "./selectNoteReducer";
var testie = {
  payload: "alan is the king"
}

const rootReducer = combineReducers({
  stale: (state = {}) => state,
  test: (state = {}) => testie,
  note
});

export default rootReducer;
