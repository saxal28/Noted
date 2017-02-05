import { combineReducers } from 'redux';
import note from "./selectNoteReducer";
import  notes  from "./getNotesReducer";
import { reducer as formReducer } from 'redux-form';
var testie = {
  payload: "alan is the king"
}

const rootReducer = combineReducers({
  stale: (state = {}) => state,
  test: (state = {}) => testie,
  note,
  form: formReducer,
  notes
});

export default rootReducer;
